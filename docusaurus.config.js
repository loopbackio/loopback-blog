// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */

// url: 'https://blog.loopback.io',
// baseUrl: '/',

const config = {
  title: 'LoopBack',
  tagline: 'LoopBack Blog',
  url: 'https://loopback.io',
  baseUrl: '/blog/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'loopbackio', // Usually your GitHub org/user name.
  projectName: 'loopback-blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl:
            'https://github.com/loopbackio/loopback-blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LoopBack',
        logo: {
          alt: 'LoopBack Logo',
          src: 'img/logo.svg',
          href: 'https://loopback.io'
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/loopbackio/loopback-next',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'OpenJS Foundation logo',
          src: 'img/openjs_foundation-logo.svg',
          href: 'https://openjsf.org/'
        },
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: 'https://loopback.io/doc/en/lb4',
              },
              {
                label: 'API Docs',
                href: 'https://loopback.io/doc/en/lb4/apidocs.index.html'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/strongloop',
              },
              {
                label: 'Slack Workspace',
                href: 'https://join.slack.com/t/loopbackio/shared_invite/zt-8lbow73r-SKAKz61Vdao~_rGf91pcsw',
              },
              {
                label: 'LinkedIn Community',
                href: 'https://www.linkedin.com/groups/5046525/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/loopbackio/loopback-next',
              },
            ],
          },
        ],
        copyright: `<p>Copyright <a href="https://openjsf.org">OpenJS Foundation</a> and LoopBack contributors. All rights reserved. The <a href="https://openjsf.org">OpenJS Foundation</a> has registered trademarks and uses trademarks.  For a list of trademarks of the <a href="https://openjsf.org">OpenJS Foundation</a>, please see our <a href="https://trademark-policy.openjsf.org">Trademark Policy</a> and <a href="https://trademark-list.openjsf.org">Trademark List</a>.  Trademarks and logos not indicated on the <a href="https://trademark-list.openjsf.org">list of OpenJS Foundation trademarks</a> are trademarks&trade; or registered&reg; trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.</p>
        <p><a href="https://openjsf.org">The OpenJS Foundation</a> | <a href="https://terms-of-use.openjsf.org">Terms of Use</a> | <a href="https://privacy-policy.openjsf.org">Privacy Policy</a> | <a href="https://bylaws.openjsf.org">Bylaws</a> | <a href="https://code-of-conduct.openjsf.org">Code of Conduct</a> | <a href="https://trademark-policy.openjsf.org">Trademark Policy</a> | <a href="https://trademark-list.openjsf.org">Trademark List</a> | <a href="https://www.linuxfoundation.org/cookies">Cookie Policy</a></p>`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
