import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from './spinner';

describe('Spinner Component', () => {
    it('renders correctly with default props', () => {
        render(<Spinner />);
        const spinner = screen.getByRole('status');
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveAttribute('aria-live', 'polite');
        expect(spinner.querySelector('.fluid\\:animate-spin-custom')).toBeInTheDocument();
        expect(spinner.querySelector('.fluid\\:animate-pulse-custom')).toBeInTheDocument();
    });

    it('merges custom className correctly', () => {
        render(<Spinner className="custom-class" />);
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveClass('custom-class');
    });

    it('applies different sizes correctly', () => {
        const { rerender } = render(<Spinner size="sm" />);
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveClass('fluid:size-8');

        rerender(<Spinner size="lg" />);
        expect(spinner).toHaveClass('fluid:size-20');
    });

    it('applies semantic colors via CSS variables', () => {
        const { rerender } = render(<Spinner color="primary" />);
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveClass('fluid:[--spinner-color:theme(colors.blue.600)]');

        rerender(<Spinner color="success" />);
        expect(spinner).toHaveClass('fluid:[--spinner-color:theme(colors.green.600)]');

        rerender(<Spinner color="destructive" />);
        expect(spinner).toHaveClass('fluid:[--spinner-color:theme(colors.red.600)]');
    });
});
