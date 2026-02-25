import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
    it('renders correctly with default props', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('bg-blue-600'); // Default primary solid
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
        expect(link).toHaveClass('bg-blue-600');
    });

    it('applies custom background and text colors via CSS variables', () => {
        const { getByRole } = render(
            <Button cBgColor="#ff0000" cTextColor="#00ff00">
                Custom
            </Button>
        );
        const button = getByRole('button');

        // Check if the variables are set in the style attribute
        const style = button.getAttribute('style');
        expect(style).toContain('--btn-bg: #ff0000');
        expect(style).toContain('--btn-text: #00ff00');
    });

    it('is disabled when the disabled prop is passed', () => {
        render(<Button disabled>Disabled</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });
});
