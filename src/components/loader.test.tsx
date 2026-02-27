import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loader, LoaderSpinner, LoaderText } from './loader';

describe('Loader Component', () => {
    it('renders the loader structure correctly', () => {
        render(
            <Loader>
                <LoaderSpinner />
            </Loader>
        );
        const loader = screen.getByRole('status');
        expect(loader).toBeInTheDocument();
        expect(loader).toHaveAttribute('aria-live', 'polite');
        expect(loader.querySelector('.fluid\\:animate-spin-custom')).toBeInTheDocument();
        expect(loader.querySelector('.fluid\\:animate-pulse-custom')).toBeInTheDocument();

    });

    it('merges custom className correctly', () => {
        render(
            <Loader className="custom-class">
                <LoaderSpinner />
            </Loader>
        );
        const loader = screen.getByRole('status');
        expect(loader).toHaveClass('custom-class');
    });

    it('renders the text when provided', () => {
        render(
            <Loader>
                <LoaderSpinner />
                <LoaderText>Test Loading</LoaderText>
            </Loader>
        );
        expect(screen.getByText('Test Loading')).toBeInTheDocument();
    });

    it('applies different sizes correctly', () => {
        const { rerender } = render(
            <Loader size="sm">
                <LoaderSpinner />
            </Loader>
        );
        const loader = screen.getByRole('status');
        expect(loader.querySelector('.fluid\\:size-8')).toBeInTheDocument();

        rerender(
            <Loader size="lg">
                <LoaderSpinner />
            </Loader>
        );
        expect(loader.querySelector('.fluid\\:size-20')).toBeInTheDocument();
    });
});
