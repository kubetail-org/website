import fs from 'fs';
import path from 'path';

import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Metadata } from 'next';

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;

  // Get post metadata from the MDX file
  // This is a simplified approach - you might need to parse the MDX file
  // to extract frontmatter in a real implementation
  const postModule = await import(`@/blog-posts/${slug}.mdx`);

  return postModule.metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  // Check if the post file exists
  const postsDirectory = path.join(process.cwd(), 'blog-posts');
  const postPath = path.join(postsDirectory, `${slug}.mdx`);

  // If the file doesn't exist, return 404
  if (!fs.existsSync(postPath)) {
    return notFound();
  }

  // Only load the component if we know the file exists
  const Post = dynamic(() => import(`@/blog-posts/${slug}.mdx`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Post />
    </Suspense>
  );
}
