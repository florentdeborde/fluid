import type { Meta, StoryObj } from '@storybook/react';
import { GlassPanel } from './glass-panel';

const meta: Meta<typeof GlassPanel> = {
    title: 'Components/GlassPanel',
    component: GlassPanel,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            table: { category: 'Dimensions' }
        },
        children: { table: { disable: true } },
    },
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'md',
        children: (
            <div className="fluid:w-[300px]">
                <h3 className="fluid:text-black fluid:font-bold fluid:mb-2">Default Glass</h3>
                <p className="fluid:text-black fluid:text-sm fluid:opacity-60">
                    A clean example with default size and subtle styling.
                </p>
            </div>
        ),
    },
};

export const Custom: Story = {
    args: {
        className: 'fluid:bg-blue-500/10 fluid:border-blue-500/30 fluid:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]',
        children: (
            <div className="fluid:w-[320px]">
                <div className="fluid:text-blue-500 fluid:font-bold fluid:text-[10px] fluid:uppercase fluid:tracking-[0.2em] fluid:mb-3">
                    System Analytics
                </div>
                <h3 className="fluid:text-black fluid:text-xl fluid:font-semibold fluid:mb-2 fluid:leading-none">
                    Performance Node
                </h3>
                <p className="fluid:text-neutral-400 fluid:text-sm fluid:leading-relaxed">
                    Customized via className for full flexibility.
                </p>
            </div>
        ),
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="fluid:flex fluid:flex-col fluid:gap-6 fluid:items-center">
            <GlassPanel size="sm">
                <div className="fluid:w-[300px]">
                    <h3 className="fluid:text-black fluid:font-bold fluid:mb-2">Default Glass</h3>
                    <p className="fluid:text-black fluid:text-sm fluid:opacity-60">
                        Small
                    </p>
                </div>
            </GlassPanel>
            <GlassPanel size="md">
                <div className="fluid:w-[300px]">
                    <h3 className="fluid:text-black fluid:font-bold fluid:mb-2">Default Glass</h3>
                    <p className="fluid:text-black fluid:text-sm fluid:opacity-60">
                        Medium
                    </p>
                </div>
            </GlassPanel>
            <GlassPanel size="lg">
                <div className="fluid:w-[300px]">
                    <h3 className="fluid:text-black fluid:font-bold fluid:mb-2">Default Glass</h3>
                    <p className="fluid:text-black fluid:text-sm fluid:opacity-60">
                        Small
                    </p>
                </div>
            </GlassPanel>
        </div>
    )
};
