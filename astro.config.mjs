// @ts-check
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightBlog from 'starlight-blog';
import starlightContextualMenu from 'starlight-contextual-menu';
import starlightLlmsTxt from 'starlight-llms-txt';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kubetail.com',
  trailingSlash: 'never',

  integrations: [
    sitemap(),
    starlight({
      plugins: [
        starlightBlog({
          navigation: 'none'
        }),
        starlightContextualMenu({
          actions: ["copy", "view", "chatgpt", "claude", "lechat"],
        }),
        starlightLlmsTxt({
          projectName: 'Kubetail',
          description: `
Kubetail is a general-purpose logging dashboard for Kubernetes, optimized for tailing logs across multi-container workloads in real-time. With Kubetail, users can view logs from all the containers in a workload (e.g. Deployment or DaemonSet) merged into a single, chronological timeline, delivered to a browser or terminal.

The primary entry point for Kubetail is the kubetail CLI tool, which can launch a local web dashboard on a user's desktop or stream raw logs directly to their terminal. Behind the scenes, Kubetail uses the Kubernetes API to fetch logs directly from the user's cluster, so it works out of the box without needing to forward logs to an external service. Kubetail also uses the Kubernetes API to track container lifecycle events in order to keep the log timeline in sync as containers start, stop or get replaced. This makes it easy to follow logs seamlessly as user requests move from one ephemeral container to another across services.
          `,
        }),
      ],
      title: 'Kubetail',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      components: {
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
      },
      customCss: [
        './src/styles/global.css',
      ],
      head: [
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
      ],
      editLink: {
        baseUrl: 'https://github.com/kubetail-org/website/edit/main/',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/kubetail-org/kubetail' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/CmsmWAVkvX' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'docs/concepts/introduction' },
            { label: 'Quickstart', slug: 'docs/tutorials/getting-started/quickstart' },
            { label: 'Architecture', slug: 'docs/concepts/architecture' },
            { label: 'Security and Privacy', slug: 'docs/concepts/security-and-privacy' },
            { label: 'Development/Production', slug: 'docs/concepts/development-vs-production' },
          ],
        },
        {
          label: 'Run on Desktop',
          items: [
            { label: 'Installation', slug: 'docs/guides/desktop/installation' },
            { label: 'Configuration', slug: 'docs/guides/desktop/configuration' },
            { label: 'Authentication', slug: 'docs/guides/desktop/authentication' },
            { label: 'Viewing Logs', slug: 'docs/guides/desktop/viewing-logs' },
          ],
        },
        {
          label: 'Run in Cluster',
          items: [
            { label: 'Installation', slug: 'docs/guides/cluster/installation' },
            { label: 'Configuration', slug: 'docs/guides/cluster/configuration' },
            { label: 'Ingress', slug: 'docs/guides/cluster/ingress' },
            { label: 'RBAC & Permissions', slug: 'docs/guides/cluster/rbac-and-permissions' },
            { label: 'Monitoring', slug: 'docs/guides/cluster/monitoring' },
          ],
        },
        {
          label: 'Use with Docker',
          items: [
            { label: 'Introduction', slug: 'docs/guides/docker/introduction' },
            { label: 'Docker Run', slug: 'docs/guides/docker/docker-run' },
            { label: 'Docker Compose', slug: 'docs/guides/docker/docker-compose' },
            { label: 'Kubernetes Pod', slug: 'docs/guides/docker/kubernetes-pod' },
          ],
        },
        {
          label: 'Web Dashboard (GUI)',
          items: [
            { label: 'Overview', slug: 'docs/concepts/gui-overview' },
            { label: 'Basic Features', slug: 'docs/guides/dashboard/basic-features' },
            { label: 'Advanced Features', slug: 'docs/guides/dashboard/advanced-features' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { label: 'Minikube', slug: 'docs/guides/integrations/minikube' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'CLI', slug: 'docs/reference/cli' },
            { label: 'Dashboard', slug: 'docs/reference/dashboard' },
            { label: 'Cluster API', slug: 'docs/reference/cluster-api' },
            { label: 'Cluster Agent', slug: 'docs/reference/cluster-agent' },
            { label: 'Helm Chart', slug: 'docs/reference/helm-chart' },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});
