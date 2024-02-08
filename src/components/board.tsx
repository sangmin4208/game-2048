import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { Cell } from './cell'
interface BoardProps extends HTMLAttributes<HTMLDivElement> {}

export const Board = ({ className, ...props }: BoardProps) => {
  const renderGrid = () => {
    const totalCellsCount = 16
    const cells = []
    for (let i = 0; i < totalCellsCount; i++) {
      cells.push(<Cell key={i} />)
    }
    return cells
  }
  return (
    <div className={cn(className)} {...props}>
      <div className="w-[40vw]">
        <div className="bg-primary rounded-lg p-4">
          <h1 className="text-2xl font-bold text-white">2048</h1>
        </div>
        <div className="border rounded-lg bg-secondary">
          <div className="grid grid-cols-4 gap-1 p-4">{renderGrid()}</div>
        </div>
      </div>
    </div>
  )
}
