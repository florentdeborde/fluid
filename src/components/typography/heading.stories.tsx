import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
    title: 'Typography/Heading',
    component: Heading,
    tags: ['autodocs'],
    argTypes: {
        level: {
            control: { type: 'number', min: 1, max: 6 },
        },
        size: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Fluid Typography',
        level: 2,
    },
};

export const Levels: Story = {
    render: () => (
        <div className="fluid:flex fluid:flex-col fluid:gap-4">
            <Heading level={1}>Heading 1: The quick brown fox</Heading>
            <Heading level={2}>Heading 2: The quick brown fox</Heading>
            <Heading level={3}>Heading 3: The quick brown fox</Heading>
            <Heading level={4}>Heading 4: The quick brown fox</Heading>
            <Heading level={5}>Heading 5: The quick brown fox</Heading>
            <Heading level={6}>Heading 6: The quick brown fox</Heading>
        </div>
    ),
};

export const SemanticVsVisual: Story = {
    render: () => (
        <div className="fluid:flex fluid:flex-col fluid:gap-4">
            <Heading level={1} size="h3">H1 element styled as H3 for layout</Heading>
            <Heading level={2} size="h1">H2 element styled as H1 for impact</Heading>
        </div>
    ),
};
