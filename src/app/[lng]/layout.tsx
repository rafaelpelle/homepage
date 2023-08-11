import { Language, languages } from '@/app/i18n/settings';
import { HamburgerIcon, RPLogo } from '@/components';
import I18nIcon from '@/components/I18nIcon';
import { dir } from 'i18next';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import './globals.css';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const font = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafael Pelle',
  description: 'My web page',
  themeColor: '#1C2128',
};

export interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: Language;
  };
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

const MenuListItems = ({ lng }: { lng: Language }) =>
  menuLinks.map(({ text, target, href }) => (
    <li key={href}>
      <Link
        className={linkClassName}
        target={target}
        href={href.startsWith('http') ? href : `/${lng}${href}`}
      >
        {text}
      </Link>
    </li>
  ));

const MobileLayout = ({ children, params }: RootLayoutProps) => {
  const { lng } = params;

  return (
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

          <Link href={`/${lng}`}>
            <RPLogo />
          </Link>
        </div>

        <div className="container mt-20">{children}</div>
      </div>

      <div className="drawer-side z-20">
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
          <MenuListItems lng={lng} />
        </ul>
      </div>
    </div>
  );
};

const DesktopLayout = ({ children, params }: RootLayoutProps) => {
  const { lng } = params;

  return (
    <div className="hidden sm:block relative z-10">
      <div className="navbar mb-5 px-5">
        <div className="flex-1">
          <Link href={`/${lng}`}>
            <RPLogo />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <MenuListItems lng={lng} />
          </ul>

          <details className="dropdown dropdown-end">
            <summary className={`btn btn-ghost py-0 ${linkClassName}`}>
              <I18nIcon />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
              <li>
                <Link href="/pt">Português 🇧🇷</Link>
              </li>
              <li>
                <Link href="/en">English 🇬🇧</Link>
              </li>
            </ul>
          </details>
        </div>
      </div>
      {children}
    </div>
  );
};

export default function RootLayout(props: RootLayoutProps) {
  const { lng } = props.params;

  return (
    <html lang={lng} dir={dir(lng)} data-theme="dark">
      <body
        className={`${font.className} bg-base-100 min-h-screen h-max selection:bg-primary selection:text-black`}
      >
        <MobileLayout {...props} />
        <DesktopLayout {...props} />
      </body>
    </html>
  );
}
