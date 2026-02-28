import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
    it('renders correctly with default props', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('fluid:bg-blue-600'); // Default primary solid
    });

    it('renders as a different element when asChild is true', () => {
        render(
            <Button asChild>
                <a href="/test">Link Button</a>
            </Button>
        );
        const link = screen.getByRole('link', { name: /link button/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/test');
        expect(link).toHaveClass('fluid:bg-blue-600');
    });


    it('merges custom className correctly', () => {
        const { getByRole } = render(
            <Button className="custom-class bg-red-500">
                Custom
            </Button>
        );
        const button = getByRole('button');
        expect(button).toHaveClass('custom-class');
        expect(button).toHaveClass('bg-red-500');
    });

    it('is disabled when the disabled prop is passed', () => {
        render(<Button disabled>Disabled</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });
});
