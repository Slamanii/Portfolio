import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrian Ovwigho",
  description:
    "Backend engineer working on distributed systems — ASAP Switch, Zazu and Kasa.",
  openGraph: {
    title: "Adrian Ovwigho",
    description: "I build systems that settle, route, and hold under real traffic.",
  },
};

const work = [
  { href: "/work/asap-switch", label: "ASAP Switch" },
  { href: "/work/zazu", label: "Zazu" },
  { href: "/work/kasa", label: "Kasa" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <header className="border-b border-border">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
            <Link href="/" className="font-mono text-sm text-foreground">
              Adrian Ovwigho
            </Link>
            <nav className="flex gap-5 font-mono text-sm text-muted">
              {work.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-3xl flex-col gap-1 px-6 py-8 text-sm text-muted">
            <span>Built quick — still rough in places.</span>
            <a
              href="mailto:adrianovwigho06@gmail.com"
              className="transition-colors hover:text-accent"
            >
              adrianovwigho06@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
