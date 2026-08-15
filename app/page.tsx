import Link from "next/link";

const projects = [
  {
    href: "/work/asap-switch",
    name: "ASAP Switch",
    tagline:
      "A neutral logistics clearing house, modeled on how banks settle between each other.",
    stack: ["Rust", "Actix-web", "Diesel", "PostgreSQL"],
    status: "Pilot live — Gwarinpa",
  },
  {
    href: "/work/zazu",
    name: "Zazu",
    tagline:
      "2-minute shopping over Telegram — order, pay, and collect without waiting.",
    stack: ["Telegram Bot API", "Paystack", "Crypto wallet"],
    status: "Live — first partner Bokku Mart",
  },
  {
    href: "/work/casa",
    name: "Casa",
    tagline:
      "Post what you're looking for. Agents bid on it. You pick who to talk to.",
    stack: ["PWA", "Feed architecture"],
    status: "Live",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <section>
        <h1 className="text-2xl font-medium text-foreground">Adrian Ovwigho</h1>
        <p className="mt-3 max-w-xl text-lg text-foreground/90">
          I build systems that settle, route, and hold under real traffic.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          23. Started in civil engineering, pivoted into software, now full-time
          in computer science. I work primarily on backend — distributed
          systems, the infrastructure that sits underneath a product and has
          to be right when nobody&apos;s watching it.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Work
        </h2>
        <div className="mt-6 flex flex-col divide-y divide-border border-t border-b border-border">
          {projects.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col gap-2 py-6 transition-colors hover:bg-surface sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h3 className="text-base font-medium text-foreground group-hover:text-accent">
                  {p.name}
                </h3>
                <p className="mt-1 max-w-md text-sm text-muted">
                  {p.tagline}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted">
                {p.status}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
