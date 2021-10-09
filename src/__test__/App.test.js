import { render, screen } from '@testing-library/react';
import App from '../App';
test('Snapshot Testing: renders title of the app in <App/>', () => {
  render(<App />);
  const title="4-Day Forecast."
  const linkElement = screen.getByText(title);
  expect(linkElement).toBeInTheDocument();
});
