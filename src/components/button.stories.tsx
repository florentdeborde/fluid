import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Rocket, Trash2 } from 'lucide-react';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            table: { category: 'Base' },
        },
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'ghost', 'link'],
            table: { category: 'Base' },
        },
        color: {
            control: 'select',
            options: ['primary', 'destructive', 'success', 'neutral'],
            table: { category: 'Base' },
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
            table: { category: 'Base' },
        },
        asChild: {
            control: 'boolean',
            table: { category: 'Base' },
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
                <Trash2 className="size-4" />
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
        className: 'bg-[#fbe72b] text-black border-black border hover:bg-[#fbe72b]/90 hover:border-2',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Button size="icon" variant="outline">
                <Rocket className="size-4" />
            </Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
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
