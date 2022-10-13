import { render, screen, fireEvent } from '@testing-library/react';
import { App } from 'App';

describe('App component', () => {
  test('should render correct current value (1) and previous value (0) after click increase button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', {
      name: /Increase/i
    });
    fireEvent.click(buttonElement);

    const currParagraphElement = screen.getByTestId('currValue');
    const prevParagraphElement = screen.getByTestId('prevValue');

    expect(currParagraphElement.textContent).toBe('1');
    expect(prevParagraphElement.textContent).toBe('0');
  });

  test('should render correct current value (-1) and previous value (0) after click increase button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', {
      name: /Decrease/i
    });
    fireEvent.click(buttonElement);
    const currParagraphElement = screen.getByTestId('currValue');
    const prevParagraphElement = screen.getByTestId('prevValue');
    expect(currParagraphElement.textContent).toBe('-1');
    expect(prevParagraphElement.textContent).toBe('0');
  });

  test('should render correct value (2) after click 2x decrease button and 4x increase button', () => {
    render(<App />);
    const decreaseButtonElement = screen.getByRole('button', {
      name: /Decrease/i
    });
    const increaseButtonElement = screen.getByRole('button', {
      name: /Increase/i
    });
    fireEvent.click(increaseButtonElement);
    fireEvent.click(increaseButtonElement);
    fireEvent.click(decreaseButtonElement);
    fireEvent.click(decreaseButtonElement);
    fireEvent.click(increaseButtonElement);
    fireEvent.click(increaseButtonElement);
    const paragraphElement = screen.getByTestId('currValue');
    expect(paragraphElement.textContent).toBe('2');
  });
});
