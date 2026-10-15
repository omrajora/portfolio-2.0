"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { ArrowUpRightIcon, MailIcon } from "@/components/visuals/Icons";
import { profile } from "@/data/site";
import { cn } from "@/lib/utils";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Contact form that composes a `mailto:` message.
 *
 * There is no backend and no email service wired up, so the form does not claim
 * to send anything. It validates input, then hands a pre-filled draft to the
 * visitor's own mail client — and the UI says exactly that.
 */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [handedOff, setHandedOff] = useState(false);

  const update = (key: keyof Fields) => (value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setHandedOff(false);
  };

  const validate = (): boolean => {
    const next: Errors = {};

    if (!fields.name.trim()) next.name = "Please add your name.";
    if (!fields.email.trim()) {
      next.email = "Please add an email address.";
    } else if (!emailPattern.test(fields.email.trim())) {
      next.email = "That email address doesn't look right.";
    }
    if (fields.message.trim().length < 10) {
      next.message = "A little more detail helps — at least 10 characters.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = `Portfolio enquiry from ${fields.name.trim()}`;
    const body = `${fields.message.trim()}\n\n—\n${fields.name.trim()}\n${fields.email.trim()}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setHandedOff(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Field
        id="contact-name"
        label="Name"
        value={fields.name}
        onChange={update("name")}
        error={errors.name}
        autoComplete="name"
        placeholder="Jane Doe"
      />

      <Field
        id="contact-email"
        label="Email"
        type="email"
        value={fields.email}
        onChange={update("email")}
        error={errors.email}
        autoComplete="email"
        placeholder="jane@company.com"
      />

      <Field
        id="contact-message"
        label="Message"
        value={fields.message}
        onChange={update("message")}
        error={errors.message}
        multiline
        placeholder="What would you like to build, or which role are you hiring for?"
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="md" variant="primary">
          <MailIcon className="h-4 w-4" />
          Compose Email
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Button>

        <p
          aria-live="polite"
          className="font-mono text-[0.6875rem] leading-relaxed text-faint"
        >
          {handedOff
            ? "Draft opened in your email client — press send there."
            : "Opens your email app with this message pre-filled."}
        </p>
      </div>

      {/* Explicit, unambiguous disclosure */}
      <p className="rounded-lg border border-dashed border-line bg-surface-2/30 px-4 py-3 text-[0.75rem] leading-relaxed text-faint">
        <span className="text-muted">Note:</span> this site has no backend, so
        nothing is submitted or stored anywhere. The button hands a pre-filled
        draft to your own mail client. Prefer to skip it? Email{" "}
        <a
          href={`mailto:${profile.email}`}
          className="text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
        >
          {profile.email}
        </a>{" "}
        directly.
      </p>
    </form>
  );
}

/* -------------------------------------------------------------------------- */

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  multiline = false,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  multiline?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;

  const shared = cn(
    "w-full rounded-lg border bg-surface-2/40 px-4 py-3 text-[0.9375rem] text-ink transition-all duration-300",
    "placeholder:text-faint/70",
    "focus:bg-surface-2/70 focus:outline-none",
    error
      ? "border-[#ff6b4a]/55 focus:border-[#ff6b4a]"
      : "border-line hover:border-line-strong focus:border-accent/60",
  );

  return (
    <div>
      <label
        htmlFor={id}
        className="label-mono mb-2.5 block text-faint"
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(shared, "resize-y min-h-[8rem]")}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={shared}
        />
      )}

      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-xs text-[#ff8a6d]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
