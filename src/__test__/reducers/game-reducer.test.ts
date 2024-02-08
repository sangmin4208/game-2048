import { Tile } from '@/models/tile'
import gameReducter, { initialState } from '@/reducers/game-reducer'
import { renderHook } from '@testing-library/react'
import { useReducer } from 'react'
import { act } from 'react-dom/test-utils'

describe('Game Reducer', () => {
  describe('create_title', () => {
    it('should create a new tile', () => {
      const tile: Tile = {
        position: [0, 0],
        value: 2,
      }

      const { result } = renderHook(() =>
        useReducer(gameReducter, initialState),
      )
      const [, dispatch] = result.current
      act(() => {
        dispatch({ type: 'create_tile', tile })
      })

      const [state] = result.current

      expect(state.board[0][0]).toBeDefined()
      expect(Object.values(state.tiles)).toContainEqual(tile)
    })
  })
})
