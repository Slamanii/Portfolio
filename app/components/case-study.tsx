import Link from "next/link";
import type { ReactNode } from "react";

export function CaseHeader({
  name,
  tagline,
  stack,
  status,
}: {
  name: string;
  tagline: string;
  stack: string[];
  status: string;
}) {
  return (
    <header>
      <Link
        href="/"
        className="font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        ← Adrian Ovwigho
      </Link>
      <h1 className="mt-6 text-2xl font-medium text-foreground">{name}</h1>
      <p className="mt-3 max-w-xl text-lg text-foreground/90">{tagline}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {s}
          </span>
        ))}
        <span className="ml-1 font-mono text-[11px] text-accent">{status}</span>
      </div>
    </header>
  );
}

export function LiveLink({
  href,
  label,
  note,
}: {
  href: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="mt-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        {label}
        <span aria-hidden="true">→</span>
      </a>
      {note && <p className="mt-2 max-w-md text-xs text-muted">{note}</p>}
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
        {title}
      </h2>
      <div className="mt-3 max-w-xl space-y-3 text-sm leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  );
}
