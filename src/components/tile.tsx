import usePreviousProps from '@/hooks/use-previous-props'
import { cn } from '@/lib/utils'
import { Tile as TileType } from '@/models/tile'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
interface TileProps {
  tile: TileType
}

export const Tile = ({ tile }: TileProps) => {
  const [scale, setScale] = useState(1)
  const previousValue = usePreviousProps(tile.value)

  const hasChanged = previousValue !== tile.value

  useEffect(() => {
    if (hasChanged) {
      setScale(1.2)
      setTimeout(() => {
        setScale(1)
      }, 100)
    }
  }, [hasChanged])

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale }}
      transition={{ duration: 0.1 }}
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
