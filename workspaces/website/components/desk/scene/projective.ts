export type Point = readonly [x: number, y: number]

export type Quad = readonly [topLeft: Point, topRight: Point, bottomLeft: Point, bottomRight: Point]

type Matrix3 = readonly number[]

const adjugate = (m: Matrix3): Matrix3 => [
  m[4] * m[8] - m[5] * m[7],
  m[2] * m[7] - m[1] * m[8],
  m[1] * m[5] - m[2] * m[4],
  m[5] * m[6] - m[3] * m[8],
  m[0] * m[8] - m[2] * m[6],
  m[2] * m[3] - m[0] * m[5],
  m[3] * m[7] - m[4] * m[6],
  m[1] * m[6] - m[0] * m[7],
  m[0] * m[4] - m[1] * m[3],
]

const multiply = (a: Matrix3, b: Matrix3): Matrix3 =>
  Array.from({ length: 9 }, (_, index) => {
    const row = Math.floor(index / 3)
    const column = index % 3
    return a[row * 3] * b[column] + a[row * 3 + 1] * b[column + 3] + a[row * 3 + 2] * b[column + 6]
  })

const transform = (m: Matrix3, [x, y, z]: readonly number[]): number[] => [
  m[0] * x + m[1] * y + m[2] * z,
  m[3] * x + m[4] * y + m[5] * z,
  m[6] * x + m[7] * y + m[8] * z,
]

const basisToQuad = ([first, second, third, fourth]: Quad): Matrix3 => {
  const basis = [first[0], second[0], third[0], first[1], second[1], third[1], 1, 1, 1]
  const [a, b, c] = transform(adjugate(basis), [fourth[0], fourth[1], 1])
  return multiply(basis, [a, 0, 0, 0, b, 0, 0, 0, c])
}

export const quadToQuadMatrix3d = (source: Quad, target: Quad): string => {
  const homography = multiply(basisToQuad(target), adjugate(basisToQuad(source)))
  const [a, b, c, d, e, f, g, h, i] = homography.map((value) => value / homography[8])
  return `matrix3d(${[a, d, 0, g, b, e, 0, h, 0, 0, 1, 0, c, f, 0, i].join(',')})`
}
