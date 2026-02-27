import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Shell, ShellHeader, ShellTitle, ShellSubtitle, ShellContent, ShellBackLink } from './shell';

describe('Shell', () => {
    it('renders title and subtitle using composable parts', () => {
        render(
            <Shell>
                <ShellHeader>
                    <ShellTitle>Hello World</ShellTitle>
                    <ShellSubtitle>Welcome to Fluid</ShellSubtitle>
                </ShellHeader>
                <ShellContent>
                    <div>Content</div>
                </ShellContent>
            </Shell>
        );

        expect(screen.getByText('Hello World')).toBeInTheDocument();
        expect(screen.getByText('Welcome to Fluid')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders the back link', () => {
        render(
            <Shell>
                <ShellBackLink href="/home" label="Go Home" />
                <ShellContent>Content</ShellContent>
            </Shell>
        );

        const link = screen.getByRole('link', { name: /go home/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/home');
    });

    it('renders children correctly', () => {
        render(
            <Shell>
                <ShellContent>
                    <div data-testid="child">Deep Content</div>
                </ShellContent>
            </Shell>
        );

        expect(screen.getByTestId('child')).toBeInTheDocument();
        expect(screen.getByText('Deep Content')).toBeInTheDocument();
    });

    it('applies the correct max-width class based on width prop', () => {
        const { container } = render(
            <Shell width="sm">
                <ShellContent>Content</ShellContent>
            </Shell>
        );

        // The first div should have the container class and the sm class
        const mainDiv = container.firstChild;
        expect(mainDiv).toHaveClass('fluid:max-w-3xl');
    });

});
