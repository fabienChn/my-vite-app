import { render, fireEvent } from '@testing-library/react';
import App from './App';

it.todo('renders Vite and React logos with correct links', () => {
  // const { getByAltText } = render(<App />);
  // const viteLogo = getByAltText('Vite logo') as HTMLImageElement;
  // const reactLogo = getByAltText('React logo') as HTMLImageElement;

  // expect(viteLogo.parentElement?.href).toBe('https://vitejs.dev');
  // expect(reactLogo.parentElement?.href).toBe('https://react.dev');
});

it('renders "Vite + React" heading', () => {
  const { getByText } = render(<App />);
  const heading = getByText('Vite + React');

  expect(heading).toBeTruthy();
});

it('renders Counter component', () => {
  const { getByText } = render(<App />);
  const counter = getByText('count is 0');

  expect(counter).toBeTruthy();
});

test('increments count when Counter button is clicked', () => {
  const { getByText } = render(<App />);
  const counterButton = getByText('count is 0');

  fireEvent.click(counterButton);

  expect(counterButton.textContent).toBe('count is 1');
});

it('renders edit message', () => {
  const { getByText } = render(<App />);
  const editMessage = getByText('Edit src/App.tsx and save to test HMR');

  expect(editMessage).toBeTruthy();
});

it('renders "Click on the Vite and React logos to learn more" message', () => {
  const { getByText } = render(<App />);
  const learnMoreMessage = getByText('Click on the Vite and React logos to learn more');

  expect(learnMoreMessage).toBeTruthy();
});
