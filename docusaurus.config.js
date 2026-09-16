// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SWI Guidance",
  tagline:
    "Explanatory guidance, worked examples, and data-source references for implementers calculating a Software Water Intensity (SWI) score. Companion to the SWI Specification — not itself normative.",
  favicon: "img/favicon.svg",

  url: "https://swi-guide.greensoftware.foundation/",
  baseUrl: "/",

  organizationName: "Green-Software-Foundation",
  projectName: "SWI-guide",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/Green-Software-Foundation/SWI-guide/tree/web",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SWI Guidance",
        logo: {
          alt: "SWI Guidance Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Guidance",
          },
          {
            href: "https://github.com/Green-Software-Foundation/SWI-guide",
            label: "GitHub",
            position: "right",
          },
          {
            type: "html",
            position: "right",
            value:
              '<a href="https://greensoftware.foundation/" target="_blank" rel="noopener noreferrer" class="navbar__link" style="display:flex;align-items:center;gap:6px;"><span style="font-size:0.8rem;">a project of</span><img src="/img/gsf-logo.svg" alt="Green Software Foundation" style="height:14px;width:auto;" /></a>',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Github",
                href: "https://github.com/Green-Software-Foundation/SWI-guide",
              },
              {
                label: "SWI Specification",
                href: "https://github.com/Green-Software-Foundation/SWI",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Trademark Policy",
                href: "https://greensoftware.foundation/policy/trademark",
              },
              {
                label: "Terms of Use",
                href: "https://greensoftware.foundation/terms-of-use",
              },
              {
                label: "Privacy Policy",
                href: "https://greensoftware.foundation/privacy-policy",
              },
            ],
          },
          {
            title: "GSF Info",
            items: [
              {
                label: "Green Software Foundation",
                href: "https://greensoftware.foundation/",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/green-software-foundation/",
              },
              {
                label: "Twitter / X",
                href: "https://twitter.com/GrnSoftwareFdn",
              },
            ],
          },
        ],
        logo: {
          alt: "Green Software Foundation",
          src: "img/gsf-footer-mark.svg",
          href: "https://greensoftware.foundation/",
          width: 48,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Green Software Foundation. Content licensed CC-BY-4.0, code licensed MIT.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
