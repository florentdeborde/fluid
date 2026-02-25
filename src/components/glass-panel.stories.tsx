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
            <div className="w-[300px]">
                <h3 className="text-black font-bold mb-2">Default Glass</h3>
                <p className="text-black text-sm opacity-60">
                    A clean example with default size and subtle styling.
                </p>
            </div>
        ),
    },
};

export const Custom: Story = {
    args: {
        className: 'bg-blue-500/10 border-blue-500/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]',
        children: (
            <div className="w-[320px]">
                <div className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
                    System Analytics
                </div>
                <h3 className="text-black text-xl font-semibold mb-2 leading-none">
                    Performance Node
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    Customized via className for full flexibility.
                </p>
            </div>
        ),
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col gap-6 items-center">
            <GlassPanel size="sm">
                <div className="w-[300px]">
                    <h3 className="text-black font-bold mb-2">Default Glass</h3>
                    <p className="text-black text-sm opacity-60">
                        Small
                    </p>
                </div>
            </GlassPanel>
            <GlassPanel size="md">
                <div className="w-[300px]">
                    <h3 className="text-black font-bold mb-2">Default Glass</h3>
                    <p className="text-black text-sm opacity-60">
                        Medium
                    </p>
                </div>
            </GlassPanel>
            <GlassPanel size="lg">
                <div className="w-[300px]">
                    <h3 className="text-black font-bold mb-2">Default Glass</h3>
                    <p className="text-black text-sm opacity-60">
                        Small
                    </p>
                </div>
            </GlassPanel>
        </div>
    )
};
