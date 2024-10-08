// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  controller: [
    "overview",
    "getting-started",
    "configuration",
    "sessions",
    "theming",
    {
      type: "category",
      label: "Examples",
      collapsed: false,
      items: [
        "examples/react",
        "examples/svelte",
        // "examples/rust",
        "examples/telegram",
      ],
    },
  ],
};

module.exports = sidebars;
