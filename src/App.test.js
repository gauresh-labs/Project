import { render, screen } from '@testing-library/react';
import App from './App';

test('renders primary portfolio calls to action on the home page', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /view my projects/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
});
