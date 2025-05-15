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
    },
  },
  blog: {
    type: 'page',
    title: 'Blog',
    theme: {
      breadcrumb: false,
      sidebar: false,
      layout: 'full',
      pagination: false,
      toc: false,
    },
  },
} satisfies MetaRecord;
