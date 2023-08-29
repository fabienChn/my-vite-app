import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('increments the count when button is clicked', () => {
    const { getByText } = render(<Counter />);
    const button = getByText('count is 0');
  
    fireEvent.click(button);
  
    expect(button.textContent).toBe('count is 1');
  });
  
  it('increments the count multiple times', () => {
    const { getByText } = render(<Counter />);
    const button = getByText('count is 0');
  
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
  
    expect(button.textContent).toBe('count is 3');
  });  
});
