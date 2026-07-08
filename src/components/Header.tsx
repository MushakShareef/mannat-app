"use client";

import { useState } from "react";
import Image from "next/image";


const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#AboutUs" },
  { label: "Wisdom", href: "#Wisdom" },
  { label: "Meditation", href: "#Meditation" },
  { label: "Health", href: "#Health" },
  { label: "Noorani Kalemaat", href: "#NooraniKalemaat" },
  { label: "Music", href: "#Music" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-deep/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-10 w-28 shrink-0">
            <Image
              src="/images/shivbabaheader.png"
              alt="Logo"
              width={152}
              height={60}
              className="h-10 w-28 object-contain"
              priority
            />
          </div>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm tracking-wide text-ivory-dim">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-gold-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-gold-soft transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-gold-soft transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-gold-soft transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/15 md:hidden">
          <ul className="flex flex-col px-5 py-3 text-sm text-ivory-dim">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 transition-colors hover:text-gold-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
