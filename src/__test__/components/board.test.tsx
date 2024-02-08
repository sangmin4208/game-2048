import { Board } from '@/components/board'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('Board', () => {
  it('should render the board with 16 cells', () => {
    // Arrange
    const { container } = render(<Board />)
    // Act
    // with role="cell" we can select all the cells
    const cells = container.querySelectorAll('[role="cell"]')
    // Assert
    expect(cells).toHaveLength(16)
  })
})
