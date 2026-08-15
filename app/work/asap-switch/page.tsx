import { CaseHeader, Section } from "@/app/components/case-study";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASAP Switch — Adrian Ovwigho",
};

export default function AsapSwitchPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <CaseHeader
        name="ASAP Switch"
        tagline="A neutral logistics clearing house, modeled on how banks settle between each other."
        stack={["Rust", "Actix-web", "Diesel", "PostgreSQL"]}
        status="Pilot live — Gwarinpa"
      />

      <Section title="The problem">
        <p>
          Ecommerce and delivery in Nigeria run through fragmented, closed
          logistics networks. Every platform builds or contracts its own
          fleet, and there&apos;s no shared rail for a delivery request to
          move across networks the way a bank transfer moves across banks.
        </p>
      </Section>

      <Section title="What it is">
        <p>
          ASAP Switch sits between requesters — ecommerce platforms — and
          riders as a neutral routing layer. It isn&apos;t a delivery
          company; it&apos;s a clearing house. Any platform can submit a
          delivery request, any KYC&apos;d rider can pick it up, and the
          switch takes a fixed two-sided routing fee for matching and
          settling the transaction — the same role NIBSS plays between banks
          in interbank settlement.
        </p>
      </Section>

      <Section title="How it's built">
        <p>
          The live codebase today is the ASAP Delivery API — Rust on
          Actix-web, Diesel as the ORM, PostgreSQL underneath. It exposes an
          open injection endpoint for ecommerce platforms to submit delivery
          requests, plus driver registration after KYC. It&apos;s built so
          this can grow into the full switch without a rewrite — same
          schema, same endpoints, more participants.
        </p>
        <p>
          Current focus is defining the transaction code messages — the
          order payload&apos;s schema as it hops endpoint to endpoint until
          it reaches its destination, orchestrated by the switch. Think the
          equivalent of ISO 8583 messages in card payments, but for a
          delivery order.
        </p>
      </Section>

      <Section title="Where it's at">
        <p>
          Pilot running in Gwarinpa — West Africa&apos;s largest single
          housing estate — with 25 riders: 20 on bicycles, 5 on gasoline
          bikes.
        </p>
      </Section>

      <Section title="What's next">
        <p>
          MVP switch build starts October 2026. The physical move to Abuja
          and vendor outreach begin the same month.
        </p>
      </Section>
    </div>
  );
}
