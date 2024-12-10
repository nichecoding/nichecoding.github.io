import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'react-native-full-calendars',
    tagline: 'full calendar for react-native users',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://nichecoding.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    
    deploymentBranch:"main",
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'nichecoding', // Usually your GitHub org/user name.
    projectName: 'nichecoding.github.io', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'react-native-full-calendars',
            logo: {
                alt: 'Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'rnfcDocsSidebar',
                    position: 'left',
                    label: 'Docs',
                },

                {
                    href: 'https://github.com/nichecoding/react-native-full-calendars',
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
                            label: 'Getting Started',
                            to: '/docs',
                        },
                    ],
                },
                
            ],
            copyright: `Copyright © ${new Date().getFullYear()}, Inc. Built with nichecoding.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;