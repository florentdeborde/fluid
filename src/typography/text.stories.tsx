import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta: Meta<typeof Text> = {
    title: 'Typography/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'base', 'lg', 'xl'],
        },
        variant: {
            control: 'select',
            options: ['default', 'muted', 'lead'],
        },
        weight: {
            control: 'select',
            options: ['normal', 'medium', 'semibold', 'bold'],
        },
        as: {
            control: 'select',
            options: ['p', 'span', 'div'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'A clean, modern interface requires pristine and highly legible typography.',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="fluid:flex fluid:flex-col fluid:gap-4">
            <Text size="xs">Extra Small: The quick brown fox jumps over the lazy dog.</Text>
            <Text size="sm">Small: The quick brown fox jumps over the lazy dog.</Text>
            <Text size="base">Base (Default): The quick brown fox jumps over the lazy dog.</Text>
            <Text size="lg">Large: The quick brown fox jumps over the lazy dog.</Text>
            <Text size="xl">Extra Large: The quick brown fox jumps over the lazy dog.</Text>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div className="fluid:flex fluid:flex-col fluid:gap-4">
            <Text variant="default">Default: Regular text for body content.</Text>
            <Text variant="muted">Muted: Secondary text like captions or hints.</Text>
            <Text variant="lead">Lead: A slightly larger, emphasized introduction paragraph.</Text>
        </div>
    ),
};

export const Weights: Story = {
    render: () => (
        <div className="fluid:flex fluid:flex-col fluid:gap-4">
            <Text weight="normal">Normal: Regular font weight (400)</Text>
            <Text weight="medium">Medium: Medium font weight (500)</Text>
            <Text weight="semibold">Semibold: Semibold font weight (600)</Text>
            <Text weight="bold">Bold: Bold font weight (700)</Text>
        </div>
    ),
};
