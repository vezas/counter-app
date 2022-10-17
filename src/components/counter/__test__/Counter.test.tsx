import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from 'components/counter/Counter';

describe('Counter app', () => {
  test('should execute fn passed by props by clicking increase button and return proper value', () => {
    let testVal;
    const mockFn = jest.fn((val) => {
      testVal = val++;
      return testVal;
    });

    render(<Counter onChange={mockFn} value={0} />);

    const buttonElement = screen.getByRole('button', { name: /Increase/i });
    userEvent.click(buttonElement);
    expect(testVal).toBe(1);
  });

  test('should execute fn passed by props by clicking decrease button and return proper value', () => {
    let testVal;
    const mockFn = jest.fn((val) => {
      testVal = val--;
      return testVal;
    });

    render(<Counter onChange={mockFn} value={10} />);

    const buttonElement = screen.getByRole('button', { name: /Decrease/i });
    userEvent.click(buttonElement);
    expect(testVal).toBe(9);
  });
});
