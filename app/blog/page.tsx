import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// Define types for the blog post data
interface Author {
  name: string;
  url?: string;
}

interface PostFrontMatter {
  title: string;
  description?: string;
  date: string | Date;
  authors?: Author[];
  [key: string]: any; // For any additional front matter fields
}

interface Post {
  slug: string;
  frontMatter: PostFrontMatter;
  content: string;
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'blog-posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    // Read file content
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Parse front matter
    const { data, content } = matter(fileContent);

    // Create slug from filename
    const slug = filename.replace(/\.mdx$/, '');

    return {
      slug,
      frontMatter: {
        title: data.title,
        description: data.description,
        date: data.date,
        authors: data.authors || [],
        ...data,
      },
      content,
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.frontMatter.title}
              </Link>
            </h2>

            <div className="text-gray-600 mb-2">
              {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}

              {post.frontMatter.authors && post.frontMatter.authors.length > 0 && (
                <span> • By {post.frontMatter.authors.map((author: Author) => author.name).join(', ')}</span>
              )}
            </div>

            {post.frontMatter.description && (
              <p className="text-gray-700">{post.frontMatter.description}</p>
            )}

            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
