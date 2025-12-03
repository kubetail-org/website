import type { MetaRecord } from 'nextra';

export default {
  index: {
    type: 'page',
    display: 'hidden',
  },
  about: {
    type: 'page',
    title: 'About',
    theme: {
      typesetting: 'article',
      copyPage: false,
    },
  },
  docs: {
    type: 'page',
    title: 'Documentation',
  },
  faq: {
    type: 'page',
    title: 'FAQ',
    theme: {
      typesetting: 'article',
      copyPage: false,
    },
  },
  blog: {
    type: 'page',
    title: 'Blog',
    theme: {
      breadcrumb: false,
      copyPage: false,
      sidebar: false,
      layout: 'full',
      pagination: false,
      toc: false,
    },
  },
} satisfies MetaRecord;
