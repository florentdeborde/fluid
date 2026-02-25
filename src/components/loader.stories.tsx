import type { Meta, StoryObj } from '@storybook/react';
import { Loader, LoaderSpinner, LoaderText } from './loader';

const meta: Meta<typeof Loader> = {
    title: 'Components/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
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
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => (
        <Loader {...args}>
            <LoaderSpinner />
            <LoaderText>Loading...</LoaderText>
        </Loader>
    ),
    args: {
        size: 'md',
        color: 'primary',
    },
};

export const Success: Story = {
    render: (args) => (
        <Loader {...args}>
            <LoaderSpinner />
            <LoaderText>Updating...</LoaderText>
        </Loader>
    ),
    args: {
        color: 'success',
    },
};

export const Destructive: Story = {
    render: (args) => (
        <Loader {...args}>
            <LoaderSpinner />
            <LoaderText>Deleting...</LoaderText>
        </Loader>
    ),
    args: {
        color: 'destructive',
    },
};

export const Custom: Story = {
    render: (args) => (
        <Loader {...args}>
            <LoaderSpinner />
            <LoaderText>Vibrant Orange</LoaderText>
        </Loader>
    ),
    args: {
        className: 'fluid:[--loader-color:#ff6b00] fluid:w-auto fluid:min-h-0',
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div className="fluid:flex fluid:items-center fluid:justify-center fluid:gap-12">
            <Loader {...args} size="sm" className="fluid:w-auto fluid:min-h-0">
                <LoaderSpinner />
                <LoaderText>Small</LoaderText>
            </Loader>
            <Loader {...args} size="md" className="fluid:w-auto fluid:min-h-0">
                <LoaderSpinner />
                <LoaderText>Medium</LoaderText>
            </Loader>
            <Loader {...args} size="lg" className="fluid:w-auto fluid:min-h-0">
                <LoaderSpinner />
                <LoaderText>Large</LoaderText>
            </Loader>
        </div>
    ),
};
