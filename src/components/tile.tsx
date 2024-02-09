import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
interface TileProps extends HTMLAttributes<HTMLDivElement> {
  value: number
}

export const Tile = ({ value, className, ...props }: TileProps) => {
  return (
    <div
      role="tile"
      className={cn(
        'size-full absolute flex items-center justify-center bg-amber-300 rounded-lg overflow-hidden',
        className,
      )}
      {...props}
    >
      <span className="text-4xl font-bold">{value}</span>
    </div>
  )
}
