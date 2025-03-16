import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: 'category',
      label: 'Documentation',
      collapsible: false,
      items: [
        'introduction',
        'features',
        'how-to-use',
        'future-plans',
        'conclusion',
      ],
    },
  ],
};

export default sidebars;
