"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";
import { site, whatsappHref } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-limestone/60">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[0.72rem] tracking-widest2 uppercase text-charcoal transition-colors hover:text-stone"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={whatsappHref()} external className="!px-6 !py-3">
            Fale com um especialista
          </Button>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-moss md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-limestone/60 bg-ivory md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 font-body text-sm tracking-widest2 uppercase text-charcoal border-b border-limestone/40 last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-moss px-6 py-3.5 text-[0.7rem] tracking-widest2 uppercase font-body text-ivory"
            >
              Fale com um especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
