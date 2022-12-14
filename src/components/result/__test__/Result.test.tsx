import { render, screen } from '@testing-library/react';
import { Result } from 'components/result/Result';

describe('Result component', () => {
  test('should render correct current value from props on page', () => {
    render(<Result value={5} />);
    const paragraphElement = screen.getByTestId('currValue');
    expect(paragraphElement.textContent).toBe('5');
  });
});
