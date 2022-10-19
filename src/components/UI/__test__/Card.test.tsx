import { render, screen } from '@testing-library/react';
import { Card } from 'components/UI/Card';

const content = <p>Test</p>;

describe('Card component', () => {
  test('should render correct content with correct styles', () => {
    render(<Card>{content}</Card>);

    const paragraphElement = screen.getByText(/Test/i);

    expect(paragraphElement.textContent).toBe('Test');
  });
});
