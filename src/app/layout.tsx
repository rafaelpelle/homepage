import { BackgroundPattern, HamburgerIcon, RLetterIcon } from "@/components";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import React from "react";
import "./globals.css";

const font = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafael Pelle",
  description: "Pelle's web page",
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

const MobileLayout = ({ children }: RootLayoutProps) => (
  <div className="drawer lg:hidden h-screen relative z-10">
    <input id="drawer" type="checkbox" className="drawer-toggle" />

    <div className="drawer-content overflow-auto">
      <div className="sticky top-0 bg-base-300 h-16 w-full z-1 px-3 flex items-center">
        <label
          htmlFor="drawer"
          className="btn btn-circle drawer-button btn-ghost"
        >
          <HamburgerIcon />
        </label>
      </div>

      {children}
    </div>

    <div className="drawer-side">
      <label htmlFor="drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>GitHub</a>
        </li>
      </ul>
    </div>
  </div>
);

const DesktopLayout = ({ children }: RootLayoutProps) => (
  <div className="hidden lg:block relative z-10">
    <div className="navbar mb-5 px-5">
      <div className="flex-1">
        <RLetterIcon />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>GitHub</a>
          </li>
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
        className={`${font.className} bg-base-100 min-h-screen selection:bg-primary selection:text-black`}
      >
        <MobileLayout>{children}</MobileLayout>
        <DesktopLayout>{children}</DesktopLayout>

        <div className="hidden lg:block absolute top-60 left-0 -rotate-90">
          <BackgroundPattern />
        </div>

        <div className="hidden lg:block absolute top-80 right-0 -rotate-45">
          <BackgroundPattern />
        </div>
      </body>
    </html>
  );
}
