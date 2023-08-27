import { render, screen } from '@testing-library/react'
import Counter from './Counter'

it('renders the counter', () => {
  render(<Counter />)
  const counterButton = screen.getByText(/count is 0/i)

  expect(counterButton).toBeTruthy()
})

