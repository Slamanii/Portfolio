import { CaseHeader, LiveLink, Section } from "@/app/components/case-study";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kasa — Adrian Ovwigho",
};

export default function KasaPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <CaseHeader
        name="Kasa"
        tagline="Post what you're looking for. Agents bid on it. You pick who to talk to."
        stack={["PWA", "Feed architecture"]}
        status="Live"
      />

      <LiveLink href="https://getkasa.ng" label="View live" />

      <Section title="The problem">
        <p>
          Renting or buying property in Nigeria usually starts with
          scrolling listings that are outdated, duplicated, or gatekept by a
          single agent. Demand-side signal — what people are actually
          looking for — has nowhere to go.
        </p>
      </Section>

      <Section title="What it is">
        <p>
          Kasa (formerly Kiwi) flips the listing model: customers post a
          &ldquo;seek&rdquo; describing what they want, agents bid on it,
          and the customer picks who to negotiate with directly. Deal flow
          runs seek → bids → selection → negotiation → agreement →
          completion → rating.
        </p>
        <p>
          A separate classifieds layer handles used houses, items, and cars
          — pure connections, no payment or logistics involved. The whole
          thing is feed-first, closer to Twitter than to a listings site:
          explore, profiles, communities.
        </p>
      </Section>

      <Section title="How it's built">
        <p>
          A PWA with feed-first architecture. Verification is deliberately
          lax at launch — reputation gets built through actual deal outcomes
          rather than upfront gatekeeping, closer to how early marketplaces
          bootstrap trust than how legacy real estate platforms do.
        </p>
      </Section>

      <Section title="Where it's at">
        <p>
          Live today, after about a month of focused build time. Recovered
          mid-build from a Git security incident — leaked Firebase
          credentials — rotated and shipped anyway.
        </p>
      </Section>

      <Section title="What's next">
        <p>
          Monetization starts with agent premium subscriptions after
          roughly a 6-month growth phase focused on liquidity first —
          enough seeks and enough agents before charging anyone.
        </p>
      </Section>
    </div>
  );
}
