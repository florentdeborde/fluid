import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';
import { Heading } from './heading';

describe('Heading', () => {
    it('should have no accessibility violations', async () => {
        const { container } = render(<Heading>Hello World</Heading>);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('renders an h2 by default', () => {
        render(<Heading data-testid="heading">Hello World</Heading>);
        const heading = screen.getByTestId('heading');
        expect(heading.tagName).toBe('H2');
        expect(heading).toHaveTextContent('Hello World');
    });

    it('renders correct heading levels', () => {
        const { rerender } = render(<Heading level={1} data-testid="heading">H1</Heading>);
        expect(screen.getByTestId('heading').tagName).toBe('H1');

        rerender(<Heading level={3} data-testid="heading">H3</Heading>);
        expect(screen.getByTestId('heading').tagName).toBe('H3');

        rerender(<Heading level={6} data-testid="heading">H6</Heading>);
        expect(screen.getByTestId('heading').tagName).toBe('H6');
    });

    it('renders polymorphically using asChild', () => {
        render(<Heading asChild data-testid="heading"><span>Span</span></Heading>);
        expect(screen.getByTestId('heading').tagName).toBe('SPAN');
    });

    it('applies explicit size variant classes independent of level', () => {
        render(<Heading level={2} size="h1" data-testid="heading">H2 styled as H1</Heading>);
        const heading = screen.getByTestId('heading');
        expect(heading.tagName).toBe('H2');
        expect(heading.className).toContain('fluid:text-4xl');
    });

    it('forwards ref correctly', () => {
        const headingRef = React.createRef<HTMLHeadingElement>();
        render(<Heading ref={headingRef}>Refs!</Heading>);
        expect(headingRef.current).not.toBeNull();
        expect(headingRef.current?.tagName).toBe('H2');
    });
});
