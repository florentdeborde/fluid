import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { Switch } from './switch';

describe('Switch', () => {
    it('should have no accessibility violations', async () => {
        const { container } = render(<Switch aria-label="Toggle" />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('renders correctly with default props', () => {
        render(<Switch aria-label="Toggle" />);
        const switchElement = screen.getByRole('switch');
        expect(switchElement).toBeInTheDocument();
        expect(switchElement).toHaveAttribute('data-state', 'unchecked');
    });

    it('toggles state when clicked', () => {
        const onCheckedChange = vi.fn();
        render(<Switch aria-label="Toggle" onCheckedChange={onCheckedChange} />);

        const switchElement = screen.getByRole('switch');

        expect(switchElement).toHaveAttribute('data-state', 'unchecked');

        fireEvent.click(switchElement);
        expect(onCheckedChange).toHaveBeenCalledWith(true);
        expect(switchElement).toHaveAttribute('data-state', 'checked');

        fireEvent.click(switchElement);
        expect(onCheckedChange).toHaveBeenCalledWith(false);
        expect(switchElement).toHaveAttribute('data-state', 'unchecked');
    });

    it('renders disabled state correctly', () => {
        render(<Switch aria-label="Toggle" disabled />);
        const switchElement = screen.getByRole('switch');
        expect(switchElement).toBeDisabled();
    });

    it('generates a unique id when none is provided', () => {
        render(<Switch aria-label="Toggle" />);
        const switchElement = screen.getByRole('switch');
        expect(switchElement.id).toBeTruthy();
    });

});
