import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
interface TileProps extends HTMLAttributes<HTMLDivElement> {}

export const Tile = (props: TileProps) => {
  return (
    <div
      {...props}
      className={cn(
        'size-full absolute flex items-center justify-center bg-amber-300 rounded-lg overflow-hidden',
        props.className,
      )}
    >
      <span className="text-4xl font-bold">2</span>
    </div>
  )
}
