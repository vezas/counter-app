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

  test('should render correct value (5) after click 10x decrease button and 5x increase button', () => {
    render(<App />);
    const decreaseButtonElement = screen.getByRole('button', { name: /Decrease/i });
    const increaseButtonElement = screen.getByRole('button', { name: /Increase/i });
    const paragraphElement = screen.getByText('0');

    for (let i = 0; i <= 10; i++) {
      userEvent.click(increaseButtonElement);
    }
    for (let i = 0; i <= 5; i++) {
      userEvent.click(decreaseButtonElement);
    }
    expect(paragraphElement.textContent).toBe('5');
  });
});
