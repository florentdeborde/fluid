import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GlassPanel } from './glass-panel';

describe('GlassPanel Size & Props', () => {
    it('renders children correctly', () => {
        render(<GlassPanel>Content</GlassPanel>);
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('applies padding variants correctly', () => {
        const { rerender } = render(<GlassPanel padding="sm">Small</GlassPanel>);
        expect(screen.getByText('Small')).toHaveClass('fluid:p-4');

        rerender(<GlassPanel padding="lg">Large</GlassPanel>);
        expect(screen.getByText('Large')).toHaveClass('fluid:p-12');

    });


    it('merges custom className correctly', () => {
        render(
            <GlassPanel className="custom-class bg-red-500">
                Styled
            </GlassPanel>
        );
        const panel = screen.getByText('Styled');
        expect(panel).toHaveClass('custom-class');
        expect(panel).toHaveClass('bg-red-500');
    });
});
