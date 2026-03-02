// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightBlog from 'starlight-blog';
import starlightContextualMenu from 'starlight-contextual-menu';
import starlightLlmsTxt from 'starlight-llms-txt';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kubetail.com',
  trailingSlash: 'never',

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          'zh-cn': 'zh-CN',
          ja: 'ja',
          ko: 'ko',
          de: 'de',
          es: 'es',
          pt: 'pt',
          fr: 'fr',
        },
      },
    }),
    starlight({
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
        ja: { label: '日本語', lang: 'ja' },
        ko: { label: '한국어', lang: 'ko' },
        de: { label: 'Deutsch', lang: 'de' },
        es: { label: 'Español', lang: 'es' },
        pt: { label: 'Português', lang: 'pt' },
        fr: { label: 'Français', lang: 'fr' },
      },
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
        {
          tag: 'script',
          content: `if(!localStorage.getItem('starlight-synced-tabs__os')){const p=navigator.platform||'';const u=navigator.userAgent||'';const t=p.startsWith('Win')?'Windows':p.startsWith('Mac')||p==='iPhone'||p==='iPad'?'macOS':/Linux|Android/.test(u)?'Linux':'macOS';localStorage.setItem('starlight-synced-tabs__os',t)}`,
        },
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
          translations: {
            'zh-CN': '入门指南',
            ja: 'はじめに',
            ko: '시작하기',
            de: 'Erste Schritte',
            es: 'Primeros pasos',
            pt: 'Primeiros passos',
            fr: 'Premiers pas',
          },
          items: [
            {
              label: 'Introduction',
              translations: {
                'zh-CN': '介绍',
                ja: 'はじめに',
                ko: '소개',
                de: 'Einführung',
                es: 'Introducción',
                pt: 'Introdução',
                fr: 'Introduction',
              },
              slug: 'docs/concepts/introduction',
            },
            {
              label: 'Quickstart',
              translations: {
                'zh-CN': '快速入门',
                ja: 'クイックスタート',
                ko: '빠른 시작',
                de: 'Schnellstart',
                es: 'Inicio rápido',
                pt: 'Início rápido',
                fr: 'Démarrage rapide',
              },
              slug: 'docs/tutorials/getting-started/quickstart',
            },
            {
              label: 'Architecture',
              translations: {
                'zh-CN': '架构',
                ja: 'アーキテクチャ',
                ko: '아키텍처',
                de: 'Architektur',
                es: 'Arquitectura',
                pt: 'Arquitetura',
                fr: 'Architecture',
              },
              slug: 'docs/concepts/architecture',
            },
            {
              label: 'Security and Privacy',
              translations: {
                'zh-CN': '安全与隐私',
                ja: 'セキュリティとプライバシー',
                ko: '보안 및 개인정보',
                de: 'Sicherheit und Datenschutz',
                es: 'Seguridad y privacidad',
                pt: 'Segurança e privacidade',
                fr: 'Sécurité et confidentialité',
              },
              slug: 'docs/concepts/security-and-privacy',
            },
            {
              label: 'Development/Production',
              translations: {
                'zh-CN': '开发/生产',
                ja: '開発/本番環境',
                ko: '개발/프로덕션',
                de: 'Entwicklung/Produktion',
                es: 'Desarrollo/Producción',
                pt: 'Desenvolvimento/Produção',
                fr: 'Développement/Production',
              },
              slug: 'docs/concepts/development-vs-production',
            },
          ],
        },
        {
          label: 'Run on Desktop',
          translations: {
            'zh-CN': '在桌面端运行',
            ja: 'デスクトップで実行',
            ko: '데스크톱에서 실행',
            de: 'Auf dem Desktop ausführen',
            es: 'Ejecutar en escritorio',
            pt: 'Executar no desktop',
            fr: 'Exécuter sur le bureau',
          },
          items: [
            {
              label: 'Installation',
              translations: {
                'zh-CN': '安装',
                ja: 'インストール',
                ko: '설치',
                de: 'Installation',
                es: 'Instalación',
                pt: 'Instalação',
                fr: 'Installation',
              },
              slug: 'docs/guides/desktop/installation',
            },
            {
              label: 'Configuration',
              translations: {
                'zh-CN': '配置',
                ja: '設定',
                ko: '구성',
                de: 'Konfiguration',
                es: 'Configuración',
                pt: 'Configuração',
                fr: 'Configuration',
              },
              slug: 'docs/guides/desktop/configuration',
            },
            {
              label: 'Authentication',
              translations: {
                'zh-CN': '身份验证',
                ja: '認証',
                ko: '인증',
                de: 'Authentifizierung',
                es: 'Autenticación',
                pt: 'Autenticação',
                fr: 'Authentification',
              },
              slug: 'docs/guides/desktop/authentication',
            },
            {
              label: 'Viewing Logs',
              translations: {
                'zh-CN': '查看日志',
                ja: 'ログの表示',
                ko: '로그 보기',
                de: 'Logs anzeigen',
                es: 'Ver registros',
                pt: 'Visualizar logs',
                fr: 'Afficher les journaux',
              },
              slug: 'docs/guides/desktop/viewing-logs',
            },
          ],
        },
        {
          label: 'Run in Cluster',
          translations: {
            'zh-CN': '在集群中运行',
            ja: 'クラスターで実行',
            ko: '클러스터에서 실행',
            de: 'Im Cluster ausführen',
            es: 'Ejecutar en clúster',
            pt: 'Executar no cluster',
            fr: 'Exécuter dans le cluster',
          },
          items: [
            {
              label: 'Installation',
              translations: {
                'zh-CN': '安装',
                ja: 'インストール',
                ko: '설치',
                de: 'Installation',
                es: 'Instalación',
                pt: 'Instalação',
                fr: 'Installation',
              },
              slug: 'docs/guides/cluster/installation',
            },
            {
              label: 'Configuration',
              translations: {
                'zh-CN': '配置',
                ja: '設定',
                ko: '구성',
                de: 'Konfiguration',
                es: 'Configuración',
                pt: 'Configuração',
                fr: 'Configuration',
              },
              slug: 'docs/guides/cluster/configuration',
            },
            { label: 'Ingress', slug: 'docs/guides/cluster/ingress' },
            {
              label: 'RBAC & Permissions',
              translations: {
                'zh-CN': 'RBAC 与权限',
                ja: 'RBAC と権限',
                ko: 'RBAC 및 권한',
                de: 'RBAC & Berechtigungen',
                es: 'RBAC y permisos',
                pt: 'RBAC e permissões',
                fr: 'RBAC et permissions',
              },
              slug: 'docs/guides/cluster/rbac-and-permissions',
            },
            {
              label: 'Monitoring',
              translations: {
                'zh-CN': '监控',
                ja: 'モニタリング',
                ko: '모니터링',
                de: 'Überwachung',
                es: 'Monitoreo',
                pt: 'Monitoramento',
                fr: 'Surveillance',
              },
              slug: 'docs/guides/cluster/monitoring',
            },
          ],
        },
        {
          label: 'Use with Docker',
          translations: {
            'zh-CN': '与 Docker 配合使用',
            ja: 'Docker で使用',
            ko: 'Docker와 함께 사용',
            de: 'Mit Docker verwenden',
            es: 'Usar con Docker',
            pt: 'Usar com Docker',
            fr: 'Utiliser avec Docker',
          },
          items: [
            {
              label: 'Introduction',
              translations: {
                'zh-CN': '介绍',
                ja: 'はじめに',
                ko: '소개',
                de: 'Einführung',
                es: 'Introducción',
                pt: 'Introdução',
                fr: 'Introduction',
              },
              slug: 'docs/guides/docker/introduction',
            },
            { label: 'Docker Run', slug: 'docs/guides/docker/docker-run' },
            { label: 'Docker Compose', slug: 'docs/guides/docker/docker-compose' },
            { label: 'Kubernetes Pod', slug: 'docs/guides/docker/kubernetes-pod' },
          ],
        },
        {
          label: 'Web Dashboard (GUI)',
          translations: {
            'zh-CN': 'Web 仪表板（GUI）',
            ja: 'Web ダッシュボード（GUI）',
            ko: '웹 대시보드 (GUI)',
            de: 'Web-Dashboard (GUI)',
            es: 'Panel web (GUI)',
            pt: 'Painel web (GUI)',
            fr: 'Tableau de bord web (IHM)',
          },
          items: [
            {
              label: 'Overview',
              translations: {
                'zh-CN': '概览',
                ja: '概要',
                ko: '개요',
                de: 'Übersicht',
                es: 'Descripción general',
                pt: 'Visão geral',
                fr: "Vue d'ensemble",
              },
              slug: 'docs/concepts/gui-overview',
            },
            {
              label: 'Basic Features',
              translations: {
                'zh-CN': '基本功能',
                ja: '基本機能',
                ko: '기본 기능',
                de: 'Grundfunktionen',
                es: 'Funciones básicas',
                pt: 'Recursos básicos',
                fr: 'Fonctionnalités de base',
              },
              slug: 'docs/guides/dashboard/basic-features',
            },
            {
              label: 'Advanced Features',
              translations: {
                'zh-CN': '高级功能',
                ja: '高度な機能',
                ko: '고급 기능',
                de: 'Erweiterte Funktionen',
                es: 'Funciones avanzadas',
                pt: 'Recursos avançados',
                fr: 'Fonctionnalités avancées',
              },
              slug: 'docs/guides/dashboard/advanced-features',
            },
          ],
        },
        {
          label: 'Integrations',
          translations: {
            'zh-CN': '集成',
            ja: 'インテグレーション',
            ko: '통합',
            de: 'Integrationen',
            es: 'Integraciones',
            pt: 'Integrações',
            fr: 'Intégrations',
          },
          items: [
            { label: 'Minikube', slug: 'docs/guides/integrations/minikube' },
          ],
        },
        {
          label: 'Reference',
          translations: {
            'zh-CN': '参考',
            ja: 'リファレンス',
            ko: '참조',
            de: 'Referenz',
            es: 'Referencia',
            pt: 'Referência',
            fr: 'Référence',
          },
          items: [
            { label: 'CLI', slug: 'docs/reference/cli' },
            {
              label: 'Dashboard',
              translations: {
                'zh-CN': '仪表板',
                ja: 'ダッシュボード',
                ko: '대시보드',
                de: 'Dashboard',
                es: 'Dashboard',
                pt: 'Dashboard',
                fr: 'Tableau de bord',
              },
              slug: 'docs/reference/dashboard',
            },
            {
              label: 'Cluster API',
              translations: {
                'zh-CN': '集群 API',
                ja: 'クラスター API',
                ko: '클러스터 API',
                de: 'Cluster-API',
                es: 'API de clúster',
                pt: 'API de cluster',
                fr: 'API du cluster',
              },
              slug: 'docs/reference/cluster-api',
            },
            {
              label: 'Cluster Agent',
              translations: {
                'zh-CN': '集群代理',
                ja: 'クラスター エージェント',
                ko: '클러스터 에이전트',
                de: 'Cluster-Agent',
                es: 'Agente de clúster',
                pt: 'Agente de cluster',
                fr: 'Agent de cluster',
              },
              slug: 'docs/reference/cluster-agent',
            },
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
    ssr: {
      external: [
        'node:buffer', 'node:crypto', 'node:fs', 'node:fs/promises',
        'node:http2', 'node:path', 'node:url',
        'buffer', 'child_process', 'crypto', 'fs', 'module',
        'os', 'path', 'tty', 'url', 'util', 'worker_threads',
      ],
    },
  },

  adapter: cloudflare({ imageService: 'compile' }),
});