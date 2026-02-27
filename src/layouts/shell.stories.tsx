import type { Meta, StoryObj } from '@storybook/react';
import { Shell } from './shell';
import { WIDTH_SIZES } from '../types/shared';

const meta: Meta<typeof Shell> = {
    title: 'Layout/Shell',
    component: Shell,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        width: {
            control: 'select',
            options: WIDTH_SIZES,
        },
        children: {
            table: { disable: true },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PlaceholderContent = (
    <section className="p-12 rounded-3xl bg-neutral-50 text-neutral-600 border-2 border-dashed border-neutral-300">
        <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
            [ Page Content Child ]
        </div>
        <p>
            This dashed area represents your custom page content.
        </p>
    </section>
);

export const Default: Story = {
    render: (args) => (
        <Shell {...args}>
            <Shell.BackLink href="#" />
            <Shell.Header>
                <Shell.Title>Composable Shell</Shell.Title>
                <Shell.Subtitle>An overview of the development process.</Shell.Subtitle>
            </Shell.Header>
            <Shell.Content>
                {PlaceholderContent}
            </Shell.Content>
        </Shell>
    ),
    args: {
        width: 'md',
    },
};

export const Minimal: Story = {
    render: (args) => (
        <Shell {...args}>
            <Shell.Header>
                <Shell.Title>Simple Layout</Shell.Title>
            </Shell.Header>
            <Shell.Content>
                {PlaceholderContent}
            </Shell.Content>
        </Shell>
    ),
    args: {
        width: 'md',
    },
};
