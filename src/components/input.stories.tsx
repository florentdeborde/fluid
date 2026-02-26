import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'password', 'email', 'tel', 'number', 'file'],
        },
        disabled: { control: 'boolean' },
        error: { control: 'boolean' },
        placeholder: { control: 'text' },
        size: {
            control: 'select',
            options: ['md', 'sm', 'lg'],
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithValue: Story = {
    args: {
        defaultValue: 'Hello there!',
    },
};

export const Password: Story = {
    args: {
        type: 'password',
    },
};

export const Email: Story = {
    args: {
        type: 'email',
    },
};

export const Tel: Story = {
    args: {
        type: 'tel',
    },
};

export const Number: Story = {
    args: {
        type: 'number',
    },
};

export const ErrorState: Story = {
    args: {
        error: true,
        defaultValue: 'wrong@value',
    },
};

export const SuccessState: Story = {
    args: {
        success: true,
        defaultValue: 'correct@value.com',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: 'Disabled input',
    },
};

export const FileUpload: Story = {
    args: {
        type: 'file',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="fluid:flex fluid:flex-col fluid:gap-4 fluid:w-full fluid:max-w-sm">
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input" />
            <Input size="lg" placeholder="Large input" />
        </div>
    ),
};
