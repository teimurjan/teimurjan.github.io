export const calculatePercentage = <
  K extends string,
  T extends { [key in K]: number }
>(
  array: T[],
  key: K,
  item: T
) => {
  const max = Math.max(...array.map((item) => item[key]))
  return (100 * item[key]) / max
}
