import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LINE text', () => {
  render(<App />);
  const linkElement = screen.getByText(/LINE/i);
  expect(linkElement).toBeInTheDocument();
});
