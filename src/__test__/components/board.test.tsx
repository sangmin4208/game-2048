import { Board } from '@/components/board'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('Board', () => {
  it('should render the board with 16 cells', () => {
    // Arrange
    const { container } = render(<Board />)
    // Act
    const cells = container.querySelectorAll('[role="cell"]')
    // Assert
    expect(cells).toHaveLength(16)
  })

  it('should render the board with 2 tiles', () => {
    // Arrange
    const { container } = render(<Board />)
    // Act
    const tiles = container.querySelectorAll('[role="tile"]')
    // Assert
    expect(tiles).toHaveLength(2)
  })
})
