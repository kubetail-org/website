import type { ReactNode } from 'react';
import styles from './blog.module.css';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div className={styles.blogWrapper}>{children}</div>;
}
