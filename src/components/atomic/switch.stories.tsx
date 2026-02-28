import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';
import { COMPONENT_SIZES, COMPONENT_COLORS } from '../../types/shared';

const meta: Meta<typeof Switch> = {
    title: 'Atomic/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: COMPONENT_COLORS,
        },
        size: {
            control: 'select',
            options: COMPONENT_SIZES,
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Colors: Story = {
    render: () => (
        <div className="fluid:flex fluid:gap-6">
            <Switch color="primary" defaultChecked />
            <Switch color="success" defaultChecked />
            <Switch color="destructive" defaultChecked />
            <Switch color="neutral" defaultChecked />
        </div>
    )
};

export const Sizes: Story = {
    render: () => (
        <div className="fluid:flex fluid:items-center fluid:gap-6">
            <Switch size="sm" defaultChecked />
            <Switch size="md" defaultChecked />
            <Switch size="lg" defaultChecked />
        </div>
    )
};

export const Custom: Story = {
    render: () => (
        <div className="fluid:flex fluid:items-center fluid:gap-6">
            <Switch size="md" defaultChecked className="fluid:[--switch-color:#ff6b00]" />
        </div>
    )
};
