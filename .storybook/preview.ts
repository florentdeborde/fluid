import type { Preview } from '@storybook/react-vite';
import * as React from 'react';
import '../src/index.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.parameters.theme || context.globals.theme;

      // Keep track of the initial theme globally for this frame
      if (!(window as any).__initialTheme) {
        (window as any).__initialTheme = theme;
      }

      if ((window as any).__initialTheme && (window as any).__initialTheme !== theme) {
        // Theme has changed! Do NOT change CSS instantly.
        // Instead, reload the entire page to let Storybook naturally mount the new theme.
        setTimeout(() => {
          window.parent.location.reload();
        }, 10);
        return React.createElement(React.Fragment); // Render nothing during the fraction of a second before reload
      }

      React.useEffect(() => {
        const root = document.documentElement;

        // Target specifically the Preview IFRAME root or Canvas
        if (theme === 'dark') {
          root.classList.add('dark');
          document.body.style.backgroundColor = 'var(--color-neutral-950, #0a0a0a)';
          document.body.style.color = 'var(--color-neutral-50, #fafafa)';
        } else {
          root.classList.remove('dark');
          document.body.style.backgroundColor = '#ffffff';
          document.body.style.color = 'var(--color-neutral-950, #0a0a0a)';
        }

        // Apply dark mode styling to each individual component block inside Docs pages
        const storyBlocks = document.querySelectorAll('.docs-story');
        storyBlocks.forEach((block) => {
          const element = block as HTMLElement;
          if (theme === 'dark') {
            element.style.backgroundColor = 'var(--color-neutral-800, #262626)';
            element.style.borderColor = 'var(--color-neutral-700, #404040)';
          } else {
            element.style.backgroundColor = '#ffffff';
            element.style.borderColor = 'var(--color-neutral-200, #e5e5e5)';
          }
        });
      }, []); // Empty dependency array: only run on mount!

      // Return the story directly to let Storybook handle padding and centering organically
      return React.createElement(Story);
    },
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    }
  }
};

export default preview;