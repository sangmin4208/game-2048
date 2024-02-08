import { Tile } from '@/models/tile'
import { uid } from 'uid'

type State = {
  board: string[][] // 4x4 grid
  tiles: { [id: string]: Tile }
}
type Action = {
  type: 'create_tile'
  tile: Tile
}

function createBoard(tileCountPerDimension: number = 4) {
  const board: string[][] = []
  for (let i = 0; i < tileCountPerDimension; i++) {
    board.push([])
    for (let j = 0; j < tileCountPerDimension; j++) {
      board[i].push('0')
    }
  }
  return board
}

export const initialState: State = {
  board: createBoard(),
  tiles: {},
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

    default:
      return state
  }
}
