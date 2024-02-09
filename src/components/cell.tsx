import { Tile as TileType } from '@/models/tile'
import { HTMLAttributes } from 'react'
import { Tile } from './tile'
interface CellProps extends HTMLAttributes<HTMLDivElement> {
  tile?: TileType
}

export const Cell = ({ className, tile, ...props }: CellProps) => {
  return (
    <div
      role="cell"
      className="border relative aspect-square m-1 rounded-sm bg-slate-300"
    >
      {/* cell */}
      {tile && <Tile className="absolute inset-0" value={tile.value} />}
    </div>
  )
}
