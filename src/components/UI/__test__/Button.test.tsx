import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from 'components/UI/Button';

describe('Button component', () => {
  test('should execute proper fn passed by prop after click button', () => {
    const mockFn = jest.fn();
    render(
      <Button onChange={mockFn} type='button'>
        Test
      </Button>
    );

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
