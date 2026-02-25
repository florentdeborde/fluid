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
        cBgColor: { control: 'text', table: { category: 'Custom Styles' } },
        cBorderColor: { control: 'text', table: { category: 'Custom Styles' } },
        cShadow: { control: 'text', table: { category: 'Custom Styles' } },
        cBlur: { control: 'text', table: { category: 'Custom Styles' } },
        cRadius: { control: 'text', table: { category: 'Custom Styles' } },
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
        cBgColor: 'rgba(59, 130, 246, 0.05)',
        cBorderColor: 'rgba(59, 130, 246, 0.3)',
        cShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        children: (
            <div className="w-[320px]">
                <div className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
                    System Analytics
                </div>
                <h3 className="text-black text-xl font-semibold mb-2 leading-none">
                    Performance Node
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    Customized with explicit props for character.
                </p>
            </div>
        ),
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-row gap-6 items-center">
            <GlassPanel size="sm">
                <p className="text-black text-xs font-bold">Small (P-4)</p>
            </GlassPanel>
            <GlassPanel size="md">
                <p className="text-black text-xs font-bold">Medium (P-8)</p>
            </GlassPanel>
            <GlassPanel size="lg">
                <p className="text-black text-xs font-bold">Large (P-12)</p>
            </GlassPanel>
        </div>
    )
};
