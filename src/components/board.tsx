'use client'
import { tileCountPerDimension } from '@/constants'
import { cn } from '@/lib/utils'
import gameReducter, { initialState } from '@/reducers/game-reducer'
import { debounce, throttle } from 'lodash'
import { HTMLAttributes, useEffect, useMemo, useReducer, useRef } from 'react'
import { Cell } from './cell'
interface BoardProps extends HTMLAttributes<HTMLDivElement> {}

export const Board = ({ className, ...props }: BoardProps) => {
  const [gameState, dispatch] = useReducer(gameReducter, initialState)
  const initialized = useRef(false)
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp' || 'ArrowDown' || 'ArrowLeft' || 'ArrowRight':
        event.preventDefault()
      case 'ArrowUp':
        dispatch({ type: 'move_up' })
        break
      case 'ArrowDown':
        dispatch({ type: 'move_down' })
        break
      case 'ArrowLeft':
        dispatch({ type: 'move_left' })
        break
      case 'ArrowRight':
        dispatch({ type: 'move_right' })
        break
    }
  }

  const renderGrid = useMemo(() => {
    const cells = []
    for (let i = 0; i < tileCountPerDimension; i++) {
      for (let j = 0; j < tileCountPerDimension; j++) {
        const id = gameState.board[i][j]
        const tile = gameState.tiles[id]
        cells.push(id ? <Cell tile={tile} /> : <Cell />)
      }
    }
    return cells
  }, [gameState.board, gameState.tiles])

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    dispatch({ type: 'create_tile', tile: { position: [0, 1], value: 2 } })
    dispatch({ type: 'create_tile', tile: { position: [0, 2], value: 2 } })
  }, [])
  useEffect(() => {
    window.addEventListener(
      'keydown',
      debounce(throttle(handleKeyDown, 500), 100),
    )
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className={cn(className)} {...props}>
      <div className="w-[40vw]">
        <div className="bg-primary rounded-lg p-4">
          <h1 className="text-2xl font-bold text-white">2048</h1>
        </div>
        <div className="border rounded-lg bg-secondary relative">
          <div className="grid grid-cols-4 gap-1 p-4">{renderGrid}</div>
        </div>
      </div>
    </div>
  )
}
