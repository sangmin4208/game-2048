import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
interface BoardProps extends HTMLAttributes<HTMLDivElement> {}

export const Board = ({ className, ...props }: BoardProps) => {
  const renderGrid = () => {
    const totalCellsCount = 16
    const cells = []
    for (let i = 0; i < totalCellsCount; i++) {
      cells.push(
        <div
          key={i}
          className="border aspect-square m-1 rounded-sm bg-slate-300"
        >
          {/* cell */}
        </div>,
      )
    }
    return cells
  }
  return (
    <div className={cn(className)} {...props}>
      <div className="w-[40vw]">
        <div className="border rounded-lg bg-secondary">
          <div className="grid grid-cols-4 gap-1 p-4">{renderGrid()}</div>
        </div>
      </div>
    </div>
  )
}
