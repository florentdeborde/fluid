import type { Meta, StoryObj } from '@storybook/react';
import { GlassPanel } from './glass-panel';
import { Heading } from '../typography/heading';
import { Text } from '../typography/text';

const meta: Meta<typeof GlassPanel> = {
    title: 'Surfaces/GlassPanel',
    component: GlassPanel,
    tags: ['autodocs'],
    argTypes: {
        padding: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Controls the internal padding',
        },
        width: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'full', 'auto'],
            description: 'Controls the maximum width of the panel',
        },
        children: { table: { disable: true } },
    },
    parameters: {
        layout: 'fullscreen', // Allow testing the background properly
    },
    decorators: [
        (Story) => (
            <div className="fluid:min-h-[500px] fluid:w-full fluid:bg-neutral-50 fluid:dark:bg-neutral-900 fluid:relative fluid:overflow-hidden fluid:flex fluid:items-center fluid:justify-center fluid:p-8">
                {/* Decorative blob shapes to demonstrate the glass blur effect */}
                <div className="fluid:absolute fluid:-top-24 fluid:-left-24 fluid:w-96 fluid:h-96 fluid:bg-blue-400/50 fluid:dark:bg-blue-500/30 fluid:rounded-full fluid:mix-blend-multiply fluid:dark:mix-blend-screen fluid:filter fluid:blur-3xl fluid:animate-pulse-custom"></div>
                <div className="fluid:absolute fluid:bottom-12 fluid:-right-24 fluid:w-80 fluid:h-80 fluid:bg-purple-400/50 fluid:dark:bg-purple-500/30 fluid:rounded-full fluid:mix-blend-multiply fluid:dark:mix-blend-screen fluid:filter fluid:blur-3xl"></div>
                <div className="fluid:absolute fluid:-bottom-8 fluid:left-20 fluid:w-72 fluid:h-72 fluid:bg-pink-400/50 fluid:dark:bg-pink-500/40 fluid:rounded-full fluid:mix-blend-multiply fluid:dark:mix-blend-screen fluid:filter fluid:blur-3xl"></div>
                <div className="fluid:relative fluid:z-10 fluid:w-full fluid:flex fluid:justify-center">
                    <Story />
                </div>
            </div>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        padding: 'md',
        width: 'md',
        children: (
            <div className="fluid:w-full">
                <Heading level={3} className="fluid:mb-2">Default Glass</Heading>
                <Text variant="muted">
                    A clean example with default size and subtle styling that lets the background shine through.
                </Text>
            </div>
        ),
    },
};

export const PaddingSizes: Story = {
    render: () => (
        <div className="fluid:flex fluid:flex-col fluid:gap-6 fluid:items-center fluid:w-full">
            <GlassPanel padding="sm" width="sm">
                <div className="fluid:w-full">
                    <Heading level={4} className="fluid:mb-2">Small Padding</Heading>
                    <Text variant="muted">
                        Compact padding
                    </Text>
                </div>
            </GlassPanel>
            <GlassPanel padding="md" width="sm">
                <div className="fluid:w-full">
                    <Heading level={3} className="fluid:mb-2">Medium Padding</Heading>
                    <Text variant="muted">
                        Default padding
                    </Text>
                </div>
            </GlassPanel>
            <GlassPanel padding="lg" width="sm">
                <div className="fluid:w-full">
                    <Heading level={2} className="fluid:mb-2">Large Padding</Heading>
                    <Text variant="muted">
                        Generous padding
                    </Text>
                </div>
            </GlassPanel>
        </div>
    )
};

export const WidthSizes: Story = {
    render: () => (
        <div className="fluid:flex fluid:flex-col fluid:gap-6 fluid:items-center fluid:w-full">
            <GlassPanel width="sm">
                <div className="fluid:w-full">
                    <Heading level={4} className="fluid:mb-2">Small Width</Heading>
                    <Text variant="muted">
                        Constrained to a small width.
                    </Text>
                </div>
            </GlassPanel>
            <GlassPanel width="md">
                <div className="fluid:w-full">
                    <Heading level={3} className="fluid:mb-2">Medium Width</Heading>
                    <Text variant="muted">
                        Constrained to a medium width.
                    </Text>
                </div>
            </GlassPanel>
            <GlassPanel width="lg">
                <div className="fluid:w-full">
                    <Heading level={2} className="fluid:mb-2">Large Width</Heading>
                    <Text variant="muted">
                        Constrained to a large width.
                    </Text>
                </div>
            </GlassPanel>
        </div>
    )
};
