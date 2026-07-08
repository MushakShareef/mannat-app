"use client";

import { useState, FormEvent } from "react";

const USEFUL_LINKS = [
  { label: "About Us", href: "#AboutUs" },
  { label: "Meditation", href: "#Meditation" },
  { label: "Health", href: "#Health" },
  { label: "Wisdom", href: "#Wisdom" },
  { label: "Noorani Kalemaat", href: "#NooraniKalemaat" },
  { label: "Music", href: "#Music" },
];

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/share/knaBJm6QJH88dBaf/?mibextid=qi2Omg" },
  { label: "YouTube — Deen-e-Nafs", href: "https://youtube.com/@deenenafs?si=wEEfXCwFsbNsIkr1" },
  { label: "YouTube — BK Jamila", href: "https://youtube.com/@bkjamila?feature=shared" },
  { label: "Instagram", href: "https://www.instagram.com/bkjamila7?utm_source=qr&igsh=MjZzMWF1OTM1cWc0" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire this up to your email provider (Mailchimp, Buttondown, etc.)
    setSubmitted(true);
  }

  return (
    <footer className="border-t border-gold/15 bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display italic text-xl text-ivory">
              Follow us for further information
            </h3>
            <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gold/30 bg-transparent px-3 py-2 text-sm text-ivory placeholder:text-ivory-dim focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 border border-gold px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold-soft transition-colors hover:bg-gold hover:text-deep"
              >
                Subscribe
              </button>
            </form>
            {submitted && (
              <p className="mt-3 text-xs text-teal">
                Thanks for joining — check your inbox soon.
              </p>
            )}
          </div>

          <div>
            <h3 className="font-display italic text-xl text-ivory">
              Useful Links
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-ivory-dim">
              {USEFUL_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-gold-soft">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display italic text-xl text-ivory">Contact</h3>
            <p className="mt-5 text-sm text-ivory-dim">
              <a
                href="mailto:khatmaemannat@gmail.com"
                className="transition-colors hover:text-gold-soft"
              >
                khatmaemannat@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-display italic text-xl text-ivory">Find us</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-ivory-dim">
              {SOCIALS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold-soft"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-gold/10 pt-6 text-center text-xs text-ivory-dim">
          Copyright © {new Date().getFullYear()}, All rights reserved. Present
          by Mannat.App
        </div>
      </div>
    </footer>
  );
}
