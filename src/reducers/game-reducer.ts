import { tileCountPerDimension } from '@/constants'
import { Tile, TileMap } from '@/models/tile'
import { isEqual, isNil } from 'lodash'
import { uid } from 'uid'

type Action =
  | { type: 'create_tile'; tile: Tile }
  | { type: 'clean_up' }
  | { type: 'move_up' }
  | { type: 'move_down' }
  | { type: 'move_left' }
  | { type: 'move_right' }

type State = {
  board: string[][] // 4x4 grid
  tiles: { [id: string]: Tile }
  hasChanged: boolean
  score: number
}

function createBoard(tileCountPerDimension: number = 4) {
  const board: string[][] = []

  for (let i = 0; i < tileCountPerDimension; i += 1) {
    board[i] = new Array(tileCountPerDimension).fill(undefined)
  }

  return board
}

export const initialState: State = {
  board: createBoard(),
  tiles: {},
  hasChanged: false,
  score: 0,
}

export default function gameReducter(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case 'create_tile': {
      const titleId = uid()
      const [x, y] = action.tile.position
      const newBoard = JSON.parse(JSON.stringify(state.board))
      newBoard[y][x] = titleId

      return {
        ...state,
        board: newBoard,
        tiles: {
          ...state.tiles,
          [titleId]: action.tile,
        },
      }
    }
    case 'move_up': {
      const newBoard = createBoard()
      const newTiles: TileMap = {}
      let hasChanged = false
      let { score } = state

      for (let x = 0; x < tileCountPerDimension; x++) {
        let newY = 0

        for (let y = 0; y < tileCountPerDimension; y++) {
          const tileId = state.board[y][x]
          const currentTile = state.tiles[tileId]

          if (!isNil(tileId)) {
            newBoard[newY][x] = tileId
            newTiles[tileId] = {
              ...currentTile,
              position: [x, newY],
            }
            if (!isEqual(currentTile.position, [x, newY])) {
              hasChanged = true
            }
            newY++
          }
        }
      }
      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        hasChanged,
        score,
      }
    }
    case 'move_down': {
      const newBoard = createBoard()
      const newTiles: TileMap = {}
      let hasChanged = false
      let { score } = state

      for (let x = 0; x < tileCountPerDimension; x++) {
        let newY = tileCountPerDimension - 1

        for (let y = 0; y < tileCountPerDimension; y++) {
          const tileId = state.board[y][x]
          const currentTile = state.tiles[tileId]

          if (!isNil(tileId)) {
            newBoard[newY][x] = tileId
            newTiles[tileId] = {
              ...currentTile,
              position: [x, newY],
            }

            if (!isEqual(currentTile.position, [x, newY])) {
              hasChanged = true
            }
            newY--
          }
        }
      }
      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        hasChanged,
        score,
      }
    }

    default:
      return state
  }
}
