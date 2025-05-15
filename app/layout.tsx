/* eslint-env node */
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import {
  SiGithub,
  SiSlack,
  SiDiscord,
  SiX,
  SiYoutube,
} from '@icons-pack/react-simple-icons';

import './globals.css';

import logo from '@/public/logo.svg';

export const metadata: Metadata = {
  description: 'Logging dashboard for Kubernetes that lets you view multiple log streams simultanously, in real-time (runs on desktop or in cluster)',
  title: 'Kubetail | Kubernetes logging dashboard',
  metadataBase: new URL('https://www.kubetail.com/'),
  twitter: {
    site: '@kubetail',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbar = (
    <Navbar
      logo={<Image src={logo} alt="Kubetail" height="40" />}
      chatLink="https://discord.gg/CmsmWAVkvX"
      projectLink="https://github.com/kubetail-org/kubetail"
    />
  );

  const footer = (
    <Footer>
      <div className="text-center md:text-left">
        <div>
          {`© 2024-${new Date().getFullYear()} Kubetail`}
        </div>
        <div className="mt-2 flex space-x-3">
          <a href="https://github.com/kubetail-org/kubetail"><SiGithub size={24} /></a>
          <a href="https://discord.gg/CmsmWAVkvX"><SiDiscord size={24} /></a>
          <a href="https://join.slack.com/t/kubetail/shared_invite/zt-2cq01cbm8-e1kbLT3EmcLPpHSeoFYm1w"><SiSlack size={24} /></a>
          <a href="https://x.com/kubetail"><SiX size={24} /></a>
          <a href="https://www.youtube.com/@kubetail"><SiYoutube size={24} /></a>
          <a href="mailto:hello@kubetail.com" title="E-Mail"><EnvelopeIcon className="h-[24px]" /></a>
        </div>
      </div>
    </Footer>
  );

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={undefined}
          navbar={navbar}
          footer={footer}
          editLink={null}
          feedback={{ content: null }}
          docsRepositoryBase="https://github.com/kubetail-org/kubetail-web"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
