import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Shell } from './shell';

describe('Shell', () => {
    it('renders title and subtitle using composable parts', () => {
        render(
            <Shell>
                <Shell.Header>
                    <Shell.Title>Hello World</Shell.Title>
                    <Shell.Subtitle>Welcome to Fluid</Shell.Subtitle>
                </Shell.Header>
                <Shell.Content>
                    <div>Content</div>
                </Shell.Content>
            </Shell>
        );

        expect(screen.getByText('Hello World')).toBeInTheDocument();
        expect(screen.getByText('Welcome to Fluid')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders the back link', () => {
        render(
            <Shell>
                <Shell.BackLink href="/home" label="Go Home" />
                <Shell.Content>Content</Shell.Content>
            </Shell>
        );

        const link = screen.getByRole('link', { name: /go home/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/home');
    });

    it('renders children correctly', () => {
        render(
            <Shell>
                <Shell.Content>
                    <div data-testid="child">Deep Content</div>
                </Shell.Content>
            </Shell>
        );

        expect(screen.getByTestId('child')).toBeInTheDocument();
        expect(screen.getByText('Deep Content')).toBeInTheDocument();
    });

    it('applies the correct max-width class based on width prop', () => {
        const { container } = render(
            <Shell width="sm">
                <Shell.Content>Content</Shell.Content>
            </Shell>
        );

        // The first div should have the container class and the sm class
        const mainDiv = container.firstChild;
        expect(mainDiv).toHaveClass('fluid:max-w-3xl');
    });

});
