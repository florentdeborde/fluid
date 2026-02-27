import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './field';
import { Label } from './label';
import { Input } from './input';
import { Switch } from './switch';

const meta = {
    title: 'Components/Field',
    component: Field,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithLabel: Story = {
    render: (args) => (
        <Field {...args}>
            <Label>Email Address</Label>
            <Input type="email" placeholder="you@example.com" />
        </Field>
    ),
};

export const RequiredInput: Story = {
    render: (args) => (
        <Field {...args}>
            <Label required>Full Name</Label>
            <Input placeholder="John Doe" />
        </Field>
    ),
};

export const SwitchWithLabel: Story = {
    render: (args) => (
        <Field className="fluid:flex-row fluid:items-center" {...args}>
            <Label>Receive Notifications</Label>
            <Switch />
        </Field>
    ),
};
