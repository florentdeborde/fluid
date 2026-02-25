import type { Meta, StoryObj } from '@storybook/react';
import { Shell } from './shell';

const meta: Meta<typeof Shell> = {
    title: 'Layout/Shell',
    component: Shell,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            table: { category: 'Base' },
        },
        subtitle: {
            control: 'text',
            table: { category: 'Base' },
        },
        backTo: {
            control: 'text',
            table: { category: 'Base' },
        },
        backLabel: {
            control: 'text',
            table: { category: 'Base' },
        },
        containerSize: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'full'],
            table: { category: 'Base' },
        },
        seo: {
            table: { category: 'Base' },
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
    args: {
        title: 'With Back Link',
        subtitle: 'An overview of the development process.',
        backTo: '#',
        backLabel: 'Back',
        containerSize: 'md',
        children: PlaceholderContent,
    },
};

export const Minimal: Story = {
    args: {
        title: 'No Back Link',
        subtitle: 'An overview of the development process.',
        containerSize: 'sm',
        children: PlaceholderContent,
    },
};
