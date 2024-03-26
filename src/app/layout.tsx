import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Damian's Portfolio",
  description: "Damian's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full fixed flex flex-row px-5 py-4 top-0 left-0 items-center justify-between bg-black z-50">
          <Link href="/" className="font-extrabold text-xl gradient-text">
            Damian FullStackDev
          </Link>

          <nav className="w-auto hidden lg:flex">
            <ul className="flex gap-5 items-center">
              {["Overview", "Projects", "Education"].map((label) => (
                <li key={label}>
                  <Link
                    href={`/#${label.toLowerCase()}`}
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    #{label}
                  </Link>
                </li>
              ))}
              <li>
                <button className="px-4 py-1.5 rounded-full bg-orange-800 text-white hover:bg-orange-700  transition-colors">
                  Contact Me
                </button>
              </li>
            </ul>
          </nav>
        </header>

        {/* <Navigation /> */}

        <main className="flex min-h-screen w-full flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
