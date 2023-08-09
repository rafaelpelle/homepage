import { HamburgerIcon, RLetterIcon } from '@/components';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import './globals.css';

const font = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafael Pelle',
  description: 'My web page',
  themeColor: '#1C2128',
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

const linkClassName = 'text-primary hover:bg-primary hover:text-slate-900';

const menuLinks = [
  {
    text: 'Work History',
    href: '/history',
  },
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'GitHub',
    href: 'https://github.com/rafaelpelle/',
    target: '_blank',
  },
];

const MenuListItems = () =>
  menuLinks.map(({ text, target, href }) => (
    <li key={href}>
      <Link className={linkClassName} target={target} href={href}>
        {text}
      </Link>
    </li>
  ));

const MobileLayout = ({ children }: RootLayoutProps) => (
  <div className="drawer sm:hidden min-h-screen relative z-10">
    <input id="drawer" type="checkbox" className="drawer-toggle" />

    <div className="drawer-content h-fit">
      <div className="absolute top-0 w-full z-10 p-3 pr-7 flex justify-between items-center">
        <label
          htmlFor="drawer"
          className="btn btn-circle drawer-button  btn-ghost text-primary"
        >
          <HamburgerIcon />
        </label>

        <Link className="w-12" href="/">
          <RLetterIcon />
        </Link>
      </div>

      <div className="container mt-20">{children}</div>
    </div>

    <div className="drawer-side z-20">
      <label htmlFor="drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
        <MenuListItems />
      </ul>
    </div>
  </div>
);

const DesktopLayout = ({ children }: RootLayoutProps) => (
  <div className="hidden sm:block relative z-10">
    <div className="navbar mb-5 px-5">
      <div className="flex-1">
        <Link className="w-12" href="/">
          <RLetterIcon />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <MenuListItems />
        </ul>
      </div>
    </div>
    {children}
  </div>
);

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${font.className} bg-base-100 min-h-screen h-max selection:bg-primary selection:text-black`}
      >
        <MobileLayout>{children}</MobileLayout>
        <DesktopLayout>{children}</DesktopLayout>
      </body>
    </html>
  );
}
