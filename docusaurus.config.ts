import { Config } from "@docusaurus/types";

const config: Config = {
  title: "Ryvit",
  tagline: "Automating TTL management for blockchain developers",
  url: "https://ryvit.app", // Replace with your actual domain
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/ryvit.ico",

  organizationName: "RyvitOfficial", // Replace with your GitHub org/user
  projectName: "Ryvit", // Repo name

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: "https://github.com/ryvitOfficial",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Ryvit",
      logo: {
        alt: "ryvit Logo",
        src: "img/ryvit.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/ryvitOfficial",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Introduction", to: "/docs/introduction" }],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/efJxysSF",
            },
            {
              label: "Email",
              href: "mailto:ryvitofficial@gmail.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ryvitOfficial",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Organization. Built with Docusaurus.`,
    },
  },
};

export default config;
