/**
 * Shared padding values for consistency across the Fluid library.
 */
export const PADDING_SIZES = ['sm', 'md', 'lg', 'xl'] as const;
export type PaddingSize = (typeof PADDING_SIZES)[number];

/**
 * Shared width values for consistency across the Fluid library.
 */
export const WIDTH_SIZES = ['sm', 'md', 'lg', 'xl', 'full', 'auto'] as const;
export type WidthSize = (typeof WIDTH_SIZES)[number];

/**
 * Shared size values for consistency across the Fluid library.
 */
export const COMPONENT_SIZES = ['sm', 'md', 'lg'] as const;
export type ComponentSize = (typeof COMPONENT_SIZES)[number];

/**
 * Shared semantic color values for consistency across the Fluid library.
 */
export const COMPONENT_COLORS = ['primary', 'destructive', 'success', 'neutral'] as const;
export type ComponentColor = (typeof COMPONENT_COLORS)[number];
