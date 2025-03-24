import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: "category",
      label: "Documentation",
      collapsible: false,
      items: [
        "introduction",
        "how-to-use",
        "payment-system",
        "project-impact",
        "features",
        "conclusion",
      ],
    },
  ],
};

export default sidebars;
