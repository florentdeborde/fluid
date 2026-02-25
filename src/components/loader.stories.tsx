import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './loader';

const meta: Meta<typeof Loader> = {
    title: 'Components/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: 'text',
            table: { category: 'Base' }
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            table: { category: 'Base' }
        },
        color: {
            control: 'select',
            options: ['primary', 'destructive', 'success', 'neutral'],
            table: { category: 'Base' }
        },
        cColor: {
            control: 'color',
            table: { category: 'Custom' }
        }
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Loading...',
        size: 'md',
        color: 'primary',
    },
};

export const Destructive: Story = {
    args: {
        text: 'System failing...',
        color: 'destructive',
    },
};

export const Success: Story = {
    args: {
        text: 'Update complete!',
        color: 'success',
    },
};

export const CustomColor: Story = {
    args: {
        text: 'Vibrant Orange',
        cColor: '#ff6b00',
    },
};

export const SmallSuccess: Story = {
    args: {
        size: 'sm',
        color: 'success',
    },
};
