import { HTMLAttributes } from 'react'
import { Tile } from './tile'
interface CellProps extends HTMLAttributes<HTMLDivElement> {}

export const Cell = ({ className, ...props }: CellProps) => {
  return (
    <div
      role="cell"
      className="border relative aspect-square m-1 rounded-sm bg-slate-300"
    >
      {/* cell */}
      <Tile />
    </div>
  )
}
