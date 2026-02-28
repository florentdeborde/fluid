import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Field } from './field';
import { Label } from '../atomic/label';
import { Input } from '../atomic/input';

describe('Field & Label', () => {
    it('automatically links Label and Input via context', () => {
        render(
            <Field>
                <Label>Username</Label>
                <Input placeholder="Enter username" />
            </Field>
        );

        const label = screen.getByText('Username');
        const input = screen.getByPlaceholderText('Enter username');

        expect(label).toHaveAttribute('for', input.id);
        expect(input.id).toBeTruthy();
    });

    it('uses explicit ID when provided to Field', () => {
        render(
            <Field id="explicit-id">
                <Label>Username</Label>
                <Input placeholder="Enter username" />
            </Field>
        );

        const label = screen.getByText('Username');
        const input = screen.getByPlaceholderText('Enter username');

        expect(input.id).toBe('explicit-id');
        expect(label).toHaveAttribute('for', 'explicit-id');
    });

    it('renders required indicator on Label', () => {
        render(<Label required>Name</Label>);
        const indicator = screen.getByText('*');
        expect(indicator).toBeInTheDocument();
        expect(indicator).toHaveAttribute('aria-hidden', 'true');
    });

    it('applies custom className to Field and Label', () => {
        render(
            <Field className="custom-field">
                <Label className="custom-label">Label</Label>
            </Field>
        );

        expect(document.querySelector('.custom-field')).toBeInTheDocument();
        expect(document.querySelector('.custom-label')).toBeInTheDocument();
    });
});
