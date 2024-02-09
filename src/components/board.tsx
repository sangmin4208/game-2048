'use client'
import { tileCountPerDimension } from '@/constants'
import { cn } from '@/lib/utils'
import gameReducter, { initialState } from '@/reducers/game-reducer'
import { HTMLAttributes, useEffect, useReducer, useRef } from 'react'
import { Cell } from './cell'
interface BoardProps extends HTMLAttributes<HTMLDivElement> {}

export const Board = ({ className, ...props }: BoardProps) => {
  const [gameState, dispatch] = useReducer(gameReducter, initialState)
  const initialized = useRef(false)
  const renderGrid = () => {
    const cells = []
    for (let i = 0; i < tileCountPerDimension; i++) {
      for (let j = 0; j < tileCountPerDimension; j++) {
        const tileId = gameState.board[i][j]
        const tile = gameState.tiles[tileId]
        cells.push(<Cell key={`${i}-${j}`} tile={tile} />)
      }
    }
    return cells
  }

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    dispatch({ type: 'create_tile', tile: { position: [0, 1], value: 2 } })
    dispatch({ type: 'create_tile', tile: { position: [0, 2], value: 2 } })
  }, [])

  return (
    <div className={cn(className)} {...props}>
      <div className="w-[40vw]">
        <div className="bg-primary rounded-lg p-4">
          <h1 className="text-2xl font-bold text-white">2048</h1>
        </div>
        <div className="border rounded-lg bg-secondary relative">
          <div className="grid grid-cols-4 gap-1 p-4">{renderGrid()}</div>
        </div>
      </div>
    </div>
  )
}
