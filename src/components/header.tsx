"use client";

import { useEffect, useState } from "react";
import { clinic, navigation } from "@/data/clinic";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <a className="header__logo" href="#top" aria-label="Medivin Clinic home">
          <Logo />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button--small header__cta" href={clinic.whatsappHref} target="_blank" rel="noreferrer">
          Book appointment <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <nav className="container" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a className="mobile-menu__book" href={clinic.whatsappHref} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
            Book on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
