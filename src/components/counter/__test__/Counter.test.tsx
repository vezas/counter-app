import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from 'components/counter/Counter';

describe('Counter app', () => {
  test('should execute fn passed by props by clicking increase button and return proper value', () => {
    const mockFn = jest.fn();
    render(<Counter onChange={mockFn} value={40} />);
    const buttonElement = screen.getByRole('button', { name: /Increase/i });
    userEvent.click(buttonElement);
    expect(mockFn).toHaveBeenCalledWith(41);
  });

  test('should execute fn passed by props by clicking decrease button and return proper value', () => {
    const mockFn = jest.fn();

    render(<Counter onChange={mockFn} value={40} />);
    const buttonElement = screen.getByRole('button', { name: /Decrease/i });
    userEvent.click(buttonElement);
    expect(mockFn).toHaveBeenCalledWith(39);
  });
});
