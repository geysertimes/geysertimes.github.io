// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'GeyserTimes Documentation',
  tagline: 'GeyserTimes documentation for users, researchers and developers alike.',
  url: 'https://geysertimes.github.io',
  baseUrl: '/docs/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'geysertimes', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/geysertimes/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./theme.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'GeyserTimes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'users/intro',
            position: 'left',
            label: 'For Users',
          },
          {
            type: 'doc',
            docId: 'researchers/intro',
            position: 'left',
            label: 'For Researchers',
          },
          {
            type: 'doc',
            docId: 'devs/intro',
            position: 'left',
            label: 'For Developers',
          },
          {
            href: 'https://github.com/geysertimes/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'For Users',
                to: '/users/intro',
              },
              {
                label: 'For Researchers',
                to: '/researchers/intro',
              },
              {
                label: 'For Developers',
                to: '/devs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Email – support@geysertimes.org',
                href: 'mailto:support@geysertimes.org',
              },
              {
                label: 'Facebook – facebook.com/GeyserTimes',
                href: 'https://facebook.com/GeyserTimes',
              },
              {
                label: 'Telegram – t.me/geysertimes',
                href: 'https://t.me/geysertimes',
              },
              {
                label: 'Medium – medium.com/geysertimes',
                href: 'https://medium.com/geysertimes',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/geysertimes/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GeyserTimes. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
