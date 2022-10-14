import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from 'components/counter/Counter';
import { useState } from 'react';

describe('Counter app', () => {
  test('get useState Hook as props and execute fn', () => {
    const Wrapper = () => {
      const [currentValue, setCurrentValue] = useState<number | null>(null);
      return (
        <div>
          <h1>{currentValue || '0'}</h1>;
          <Counter onChange={setCurrentValue} value={currentValue} />;
        </div>
      );
    };
    render(<Wrapper />);

    const buttonElement = screen.getByRole('button', { name: /Increase/i });
    userEvent.click(buttonElement);

    const divElement = screen.getByRole('heading');
    expect(divElement.textContent).toBe('1');
  });
});
