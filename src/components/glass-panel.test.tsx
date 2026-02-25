import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GlassPanel } from './glass-panel';
import * as React from 'react';

describe('GlassPanel Size & Props', () => {
    it('renders children correctly', () => {
        render(<GlassPanel>Content</GlassPanel>);
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('applies size variants correctly', () => {
        const { rerender } = render(<GlassPanel size="sm">Small</GlassPanel>);
        expect(screen.getByText('Small').parentElement).toHaveClass('p-4');

        rerender(<GlassPanel size="lg">Large</GlassPanel>);
        expect(screen.getByText('Large').parentElement).toHaveClass('p-12');
    });

    it('applies custom background and border via props', () => {
        render(
            <GlassPanel
                cBgColor="rgb(255, 0, 0)"
                cBorderColor="rgb(0, 255, 0)"
            >
                Styled
            </GlassPanel>
        );
        const panel = screen.getByText('Styled').parentElement;
        const style = window.getComputedStyle(panel!);
        expect(style.getPropertyValue('--glass-bg')).toBe('rgb(255, 0, 0)');
        expect(style.getPropertyValue('--glass-border')).toBe('rgb(0, 255, 0)');
    });
});
