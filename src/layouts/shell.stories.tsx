import type { Meta, StoryObj } from '@storybook/react';
import { Shell, ShellHeader, ShellTitle, ShellSubtitle, ShellContent, ShellBackLink } from './shell';

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
            options: ['sm', 'md', 'lg', 'xl', 'full'],
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
            <ShellBackLink href="#" />
            <ShellHeader>
                <ShellTitle>Composable Shell</ShellTitle>
                <ShellSubtitle>An overview of the development process.</ShellSubtitle>
            </ShellHeader>
            <ShellContent>
                {PlaceholderContent}
            </ShellContent>
        </Shell>
    ),
    args: {
        width: 'md',
    },
};

export const Minimal: Story = {
    render: (args) => (
        <Shell {...args}>
            <ShellHeader>
                <ShellTitle>Simple Layout</ShellTitle>
            </ShellHeader>
            <ShellContent>
                {PlaceholderContent}
            </ShellContent>
        </Shell>
    ),
    args: {
        width: 'sm',
    },
};
