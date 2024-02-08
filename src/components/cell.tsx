import { HTMLAttributes } from 'react'
interface CellProps extends HTMLAttributes<HTMLDivElement> {}

export const Cell = ({ className, ...props }: CellProps) => {
  return (
    <div
      role="cell"
      className="border aspect-square m-1 rounded-sm bg-slate-300"
    >
      {/* cell */}
    </div>
  )
}
