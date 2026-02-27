import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Rocket, Trash2 } from 'lucide-react';
import { COMPONENT_SIZES, COMPONENT_COLORS } from '../types/shared';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
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
            options: [...COMPONENT_SIZES, 'icon'],
        },
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'ghost', 'link'],
        },
        asChild: {
            control: 'boolean',
        },
        children: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'solid',
        color: 'primary',
    },
};

export const Success: Story = {
    args: {
        children: 'Success Button',
        variant: 'solid',
        color: 'success',
    },
};

export const DestructiveWithIcon: Story = {
    args: {
        children: (
            <>
                <Trash2 className="fluid:size-4" />
                Delete
            </>
        ),
        variant: 'solid',
        color: 'destructive',
    },
};

export const Custom: Story = {
    args: {
        children: 'Custom Yellow',
        className: 'fluid:bg-[#FBE72B] fluid:dark:bg-[#FBE72B] fluid:text-black fluid:dark:text-black fluid:border fluid:hover:bg-[#F4D000] fluid:dark:hover:bg-[#F4D000] fluid:transition-colors',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="fluid:flex fluid:items-center fluid:gap-4">
            <Button size="icon" variant="outline">
                <Rocket className="fluid:size-4" />
            </Button>
            <Button size="sm">Small</Button>
            <Button size="md">Default</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};

export const AsChild: Story = {
    args: {
        asChild: true,
        variant: 'outline',
        children: <a href="https://github.com/florentdeborde/fluid">GitHub Link</a>,
    },
};
