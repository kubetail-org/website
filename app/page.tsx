import type { Metadata } from 'next';
import ReactDOM from 'react-dom';

import PageContentMDX from './page-content.mdx';

export const metadata: Metadata = {};

function HeroBanner() {
  return (
    <div className="w-full py-[4rem] bg-gradient-to-b from-chrome-100 to-transparent">
      <div className="px-[1.5rem] space-y-6 text-center">
        <h1 className="text-4xl font-bold">User-friendly Kubernetes logging</h1>
        <h2 className="text-xl">Kubetail is a real-time logging dashboard for Kubernetes</h2>
      </div>
    </div>
  );
}

export default function Page() {
  ReactDOM.preload('https://assets.kubetail.com/demo-light-poster.bb7f6d4a.webp', {
    as: 'image',
    fetchPriority: 'high',
  });

  ReactDOM.preload('https://assets.kubetail.com/demo-dark-poster.6070fba2.webp', {
    as: 'image',
    fetchPriority: 'high',
  });

  return (
    <div className="mb-[4rem]">
      <HeroBanner />
      <div className="container max-w-screen-md mx-auto px-[1.5rem]">
        <div className="flex flex-col items-center">
          <video
            className="w-full max-w-screen-sm rounded-md dark:hidden"
            poster="https://assets.kubetail.com/demo-light-poster.bb7f6d4a.webp"
            controls
          >
            <source src="https://assets.kubetail.com/demo-light.48aba4ab.mp4" type="video/mp4" />
          </video>
          <video
            className="w-full max-w-screen-sm rounded-md hidden dark:block"
            poster="https://assets.kubetail.com/demo-dark-poster.6070fba2.webp"
            controls
          >
            <source src="https://assets.kubetail.com/demo-dark.251c0575.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="text-center my-2">
          <a className="underline hover:no-underline text-blue-600" href="https://www.kubetail.com/demo">
            Live Demo
            <svg
              className="inline align-baseline"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
              viewBox="0 0 24 24"
              height="16"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
        <PageContentMDX />
      </div>
    </div>
  );
}
