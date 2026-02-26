import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './text';

describe('Text', () => {
    it('renders a p element by default', () => {
        render(<Text data-testid="text">Hello World</Text>);
        const text = screen.getByTestId('text');
        expect(text.tagName).toBe('P');
        expect(text).toHaveTextContent('Hello World');
    });

    it('renders correct elements based on as prop', () => {
        const { rerender } = render(<Text as="span" data-testid="text">Span</Text>);
        expect(screen.getByTestId('text').tagName).toBe('SPAN');

        rerender(<Text as="div" data-testid="text">Div</Text>);
        expect(screen.getByTestId('text').tagName).toBe('DIV');
    });

    it('applies variant classes correctly', () => {
        render(<Text variant="muted" data-testid="text">Muted</Text>);
        const text = screen.getByTestId('text');
        expect(text.className).toContain('text-neutral-500');
    });

    it('forwards ref correctly', () => {
        const textRef = React.createRef<HTMLParagraphElement>();
        render(<Text ref={textRef}>Refs!</Text>);
        expect(textRef.current).not.toBeNull();
        expect(textRef.current?.tagName).toBe('P');
    });
});
