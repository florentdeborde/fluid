import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn utility (prefix handling)', () => {
    it('correctly handles simple fluid: prefix conflicts', () => {
        expect(cn('fluid:p-2', 'fluid:p-4')).toBe('fluid:p-4');
    });

    it('correctly handles color conflicts with fluid: prefix', () => {
        expect(cn('fluid:text-red-500', 'fluid:text-blue-500')).toBe('fluid:text-blue-500');
    });

    it('correctly resolves padding shorthand vs side conflicts with fluid: prefix', () => {
        // Note: tailwind-merge resolves px-2 vs p-4 by keeping the latter as it covers more
        expect(cn('fluid:px-2', 'fluid:p-4')).toBe('fluid:p-4');
    });

    it('correctly handles background opacity and color conflicts with fluid: prefix', () => {
        expect(cn('fluid:bg-red-500/50', 'fluid:bg-blue-500')).toBe('fluid:bg-blue-500');
    });

    it('correctly handles display conflicts with fluid: prefix', () => {
        expect(cn('fluid:flex', 'fluid:grid')).toBe('fluid:grid');
    });

    it('keeps non-conflicting fluid: classes', () => {
        const result = cn('fluid:flex', 'fluid:items-center', 'fluid:justify-between');
        expect(result).toContain('fluid:flex');
        expect(result).toContain('fluid:items-center');
        expect(result).toContain('fluid:justify-between');
    });

    it('merges fluid: prefix with standard classes (standard classes are not merged by twMerge if prefix is different)', () => {
        // Standard classes and prefixed classes are treated as different properties by default
        // unless tailwind-merge is configured with the prefix.
        const result = cn('p-4', 'fluid:p-2');
        expect(result).toContain('p-4');
        expect(result).toContain('fluid:p-2');
    });
});
