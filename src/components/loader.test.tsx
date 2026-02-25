import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader Component', () => {
    it('renders the loader structure correctly', () => {
        render(<Loader />);
        const loader = screen.getByRole('status');
        expect(loader).toBeInTheDocument();
        expect(loader.querySelector('.animate-spin-custom')).toBeInTheDocument();
        expect(loader.querySelector('.animate-pulse-custom')).toBeInTheDocument();
    });

    it('applies the custom color via CSS variable', () => {
        render(<Loader cColor="#ff0000" />);
        const loader = screen.getByRole('status');
        expect(loader).toHaveStyle('--loader-color: #ff0000');
    });

    it('renders the text when provided', () => {
        render(<Loader text="Test Loading" />);
        expect(screen.getByText('Test Loading')).toBeInTheDocument();
    });

    it('applies different sizes correctly', () => {
        const { rerender } = render(<Loader size="sm" />);
        const loader = screen.getByRole('status');
        expect(loader.querySelector('.size-8')).toBeInTheDocument();

        rerender(<Loader size="lg" />);
        expect(loader.querySelector('.size-20')).toBeInTheDocument();
    });
});
