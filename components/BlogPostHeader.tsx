type BlogPostHeaderProps = {
  title: string;
  date: string;
  authors: {
    name: string;
    url: string;
  }[];
};

export default function BlogPostHeader({
  title,
  date,
  authors,
}: BlogPostHeaderProps) {
  // Format date as Month Day Year
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <div className="text-chrome-500">{formattedDate}</div>
      <h1 className="text-4xl font-medium my-8">{title}</h1>
      <div className="text-chrome-500">
        By
        {' '}
        {authors.map((author, index) => (
          <span key={author.name}>
            {index > 0 && ', '}
            {author.name}
          </span>
        ))}
      </div>
    </>
  );
}
