import { Fragment } from 'react'

export function Bold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) => {
        const key = `${i}-${part}`
        return i % 2 === 1 ? <b key={key}>{part}</b> : <Fragment key={key}>{part}</Fragment>
      })}
    </>
  )
}
