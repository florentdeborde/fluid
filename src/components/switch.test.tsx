
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Switch } from './switch';

describe('Switch', () => {
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

});
