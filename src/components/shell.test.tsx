import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Shell } from './shell';

describe('Shell', () => {
    it('renders title and subtitle', () => {
        render(
            <Shell title="Hello World" subtitle="Welcome to Fluid">
                <div>Content</div>
            </Shell>
        );

        expect(screen.getByText('Hello World')).toBeInTheDocument();
        expect(screen.getByText('Welcome to Fluid')).toBeInTheDocument();
    });

    it('renders the back link when backTo is provided', () => {
        render(
            <Shell backTo="/home" backLabel="Go Home">
                <div>Content</div>
            </Shell>
        );

        const link = screen.getByRole('link', { name: /go home/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/home');
    });

    it('hides the back link when backTo is not provided', () => {
        render(
            <Shell>
                <div>Content</div>
            </Shell>
        );

        expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('renders children correctly', () => {
        render(
            <Shell>
                <div data-testid="child">Deep Content</div>
            </Shell>
        );

        expect(screen.getByTestId('child')).toBeInTheDocument();
        expect(screen.getByText('Deep Content')).toBeInTheDocument();
    });

    it('applies the correct max-width class based on containerSize', () => {
        const { container } = render(
            <Shell containerSize="sm">
                <div>Content</div>
            </Shell>
        );

        // The first div should have the container class and the sm class
        const mainDiv = container.firstChild;
        expect(mainDiv).toHaveClass('max-w-3xl');
    });
});
