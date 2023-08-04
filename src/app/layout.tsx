import { HamburgerIcon } from "@/components";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafael Pelle",
  description: "Pelle's web page",
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="dark">
      <body className={montserrat.className}>
        <div className="bg-base-100 drawer lg:drawer-open h-screen">
          <input id="drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">
            <div className="lg:hidden sticky top-0 h-16 w-full z-1 flex items-center bg-base-100">
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
                <a>Portfolio</a>
              </li>
              <li>
                <a>GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
