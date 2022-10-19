import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from 'App';

describe('App component', () => {
  test('should render correct current value (1) and previous value (0) after click increase button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', {
      name: /Increase/i
    });

    const currParagraphElement = screen.getByText('0');
    const prevParagraphElement = screen.getByText('?');

    userEvent.click(buttonElement);

    expect(currParagraphElement.textContent).toBe('1');
    expect(prevParagraphElement.textContent).toBe('0');
  });

  test('should render correct current value (-1) and previous value (0) after click decrease button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', {
      name: /Decrease/i
    });
    const currParagraphElement = screen.getByText('0');
    const prevParagraphElement = screen.getByText('?');

    userEvent.click(buttonElement);

    expect(currParagraphElement.textContent).toBe('-1');
    expect(prevParagraphElement.textContent).toBe('0');
  });
});
