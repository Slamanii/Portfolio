"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/app/lib/actions";

const initialState: ContactState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState
  );

  return (
    <form action={formAction} className="mt-6 max-w-md space-y-4">
      {/* Honeypot field — hidden from real visitors, catches basic bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label
          htmlFor="name"
          className="font-mono text-xs uppercase tracking-widest text-muted"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={pending}
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent disabled:opacity-50"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-mono text-xs uppercase tracking-widest text-muted"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={pending}
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent disabled:opacity-50"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-widest text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={pending}
          className="mt-2 w-full resize-none rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent disabled:opacity-50"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
        >
          {pending ? "Sending…" : "Send"}
        </button>
        {state.message && (
          <p
            role="status"
            className={`text-sm ${
              state.status === "error" ? "text-red-400" : "text-accent"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
