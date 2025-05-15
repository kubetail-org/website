declare module '*.mdx' {
  import type { MDXComponents } from 'nextra/mdx-components';

  const ReactComponent: React.FC<{
    components?: MDXComponents
  }>;

  export default ReactComponent;
}

declare module '*.svg?svgr' {
  const ReactComponent: React.FC<React.SVGProps<SVGElement>>;

  export default ReactComponent;
}
