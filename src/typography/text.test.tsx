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

    it('renders polymorphically using asChild', () => {
        const { rerender } = render(<Text asChild data-testid="text"><span>Span</span></Text>);
        expect(screen.getByTestId('text').tagName).toBe('SPAN');

        rerender(<Text asChild data-testid="text"><div>Div</div></Text>);
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
