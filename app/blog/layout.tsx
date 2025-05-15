export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container max-w-screen-md mx-auto px-[1.5rem] mt-10 mb-40">
      {children}
    </div>
  );
}
