import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './input';

describe('Input', () => {
    it('renders correctly', () => {
        render(<Input placeholder="Test input" />);
        const input = screen.getByPlaceholderText('Test input');
        expect(input).toBeInTheDocument();
    });

    it('applies fluid prefix classes correctly', () => {
        render(<Input data-testid="test-input" />);
        const input = screen.getByTestId('test-input');
        expect(input.className).toContain('fluid:flex');
        expect(input.className).toContain('fluid:h-10');
    });

    it('applies explicit size variant classes', () => {
        render(<Input data-testid="input-sm" size="sm" />);
        const inputSm = screen.getByTestId('input-sm');
        expect(inputSm.className).toContain('fluid:h-9');

        render(<Input data-testid="input-lg" size="lg" />);
        const inputLg = screen.getByTestId('input-lg');
        expect(inputLg.className).toContain('fluid:h-12');
    });

    it('passes custom className to the element', () => {
        render(<Input data-testid="test-input" className="fluid:custom-class" />);
        const input = screen.getByTestId('test-input');
        expect(input.className).toContain('fluid:custom-class');
        expect(input.className).toContain('fluid:flex'); // Ensure base classes are kept
    });

    it('disables the input when disabled prop is true', () => {
        render(<Input data-testid="test-input" disabled />);
        const input = screen.getByTestId('test-input');
        expect(input).toBeDisabled();
    });

    it('applies error variant and aria-invalid when error prop is true', () => {
        render(<Input data-testid="test-input" error />);
        const input = screen.getByTestId('test-input');
        expect(input.className).toContain('fluid:border-red-500');
        expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('applies success variant when success prop is true', () => {
        render(<Input data-testid="test-success" success />);
        const input = screen.getByTestId('test-success');
        expect(input.className).toContain('fluid:border-green-500');
        expect(input).not.toHaveAttribute('aria-invalid', 'true');
    });

    it('forwards ref correctly', () => {
        let inputRef: HTMLInputElement | null = null;
        render(<Input ref={(node) => (inputRef = node)} />);
        expect(inputRef).not.toBeNull();
        expect(inputRef?.tagName).toBe('INPUT');
    });
});
