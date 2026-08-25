import { CaseHeader, Section } from "@/app/components/case-study";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zazu — Adrian Ovwigho",
};

export default function ZazuPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <CaseHeader
        name="Zazu"
        tagline="2-Minute Shopping — order and pay over Telegram, collect from a kiosk without waiting."
        stack={["Telegram Bot API", "Paystack", "Crypto wallet"]}
        status="Live — first intended partnership with Bokku Mart"
      />

      <Section title="The problem">
        <p>
          Buying from a local vendor usually means messaging back and forth,
          hoping the stock they quoted is still right, and paying in person.
          Vendors are juggling several customer chats and their inventory by
          hand at the same time.
        </p>
      </Section>

      <Section title="What it is">
        <p>
          Zazu is a Telegram-based commerce assistant. Vendors track
          inventory and message clients in parallel from one place;
          customers order and pay through the bot. The core model is
          click-and-collect escrow: the customer orders and pays via the
          bot, vendor staff pack it, the customer scans a QR or receipt to
          collect in under two minutes, and escrow releases to the vendor on
          collection.
        </p>
        <p>
          Every order also gets a delivery option through ASAP
          Switch&apos;s network, leveraging its logistics instead of
          building one from scratch. But delivery isn&apos;t required — the
          collect flow works even outside ASAP&apos;s coverage area.
        </p>
      </Section>

      <Section title="How it's built">
        <p>
          Paystack handles card and bank payment; a crypto wallet
          integration sits alongside it. Vendor-side inventory tracking and
          parallel customer messaging run on top of the Telegram Bot API.
        </p>
      </Section>

      <Section title="Where it's at">
        <p>
          Fully built and live. Bokku Mart is the first test partner — kiosk
          density there is what makes bicycle delivery economics work in the
          first place. Monetization is fixed vendor subscription tiers
          rather than per-order commission.
        </p>
      </Section>

      <Section title="What's next">
        <p>
          A mini-app integration for vendors who want their own branded UI
          on top of the bot. Right now it&apos;s blocked on financing — the
          delivery side needs drivers actually funded and available to pick
          up orders.
        </p>
      </Section>
    </div>
  );
}
