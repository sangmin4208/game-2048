import { cn } from '@/lib/utils'
import { Tile as TileType } from '@/models/tile'
import { motion } from 'framer-motion'
interface TileProps {
  tile: TileType
}

export const Tile = ({ tile }: TileProps) => {
  return (
    <motion.div
      role="tile"
      layoutId={tile.id}
      className={cn(
        'size-full z-50 absolute flex items-center justify-center bg-amber-300 rounded-lg overflow-hidden',
      )}
    >
      <span className="text-4xl font-bold">{tile.value}</span>
    </motion.div>
  )
}
