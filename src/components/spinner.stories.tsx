import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './spinner';
import { Text } from '../typography/text';
import { COMPONENT_SIZES, COMPONENT_COLORS } from '../types/shared';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
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
    },
    decorators: [
        (Story) => (
            <div className="fluid:flex fluid:items-center fluid:justify-center fluid:min-h-[200px] fluid:w-full">
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: 'primary',
        size: 'md',
    },
};

export const Colors: Story = {
    render: () => (
        <div className="fluid:flex fluid:items-center fluid:justify-center fluid:gap-12">
            <Spinner color="primary" />
            <Spinner color="success" />
            <Spinner color="destructive" />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="fluid:flex fluid:items-center fluid:justify-center fluid:gap-12">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
        </div>
    ),
};

export const Custom: Story = {
    args: {
        className: 'fluid:[--spinner-color:#ff6b00]',
    },
    render: (args) => (
        <div className="fluid:flex fluid:flex-col fluid:items-center fluid:gap-4">
            <Spinner {...args} />
            <Text size="sm" weight="medium" className="fluid:text-[#ff6b00]">
                Vibrant Orange
            </Text>
        </div>
    ),
};
