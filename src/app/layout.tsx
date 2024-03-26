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
        <header className="w-full fixed flex flex-row px-5 py-3 top-0 left-0 items-center justify-between bg-black z-50">
          <Link
            href="/"
            className="bg-gradient-to-l font-extrabold text-xl from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text"
          >
            Damian FullStackDev
          </Link>

          <nav className="w-auto hidden lg:flex">
            <ul className="flex gap-5 items-center">
              {["Overview", "Projects", "Education"].map((label) => (
                <li key={label}>
                  <Link
                    href={`/#${label.toLowerCase()}`}
                    className="text-purple-400 hover:text-purple-600 transition-colors"
                  >
                    #{label}
                  </Link>
                </li>
              ))}
              <li>
                <button className="px-4 py-1.5 rounded-full bg-purple-950 text-purple-200 hover:bg-purple-900 hover:text-purple-100 transition-colors">
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
