import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with clsx and tailwind-merge.
 * This ensures that conflicting classes (like 'p-2' and 'p-4') 
 * are resolved correctly based on the last one provided.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
