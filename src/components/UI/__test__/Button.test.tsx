import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from 'components/UI/Button';

const mockFn = jest.fn();

describe('Card component', () => {
  test('should execute fn passed by prop', () => {
    render(<Button onChange={mockFn} type={'button'} children={'test'} />);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
