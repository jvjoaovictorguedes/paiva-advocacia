import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { InstagramIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";
import { pillars } from "@/content/areas";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-moss text-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "url('/pattern.svg')", backgroundSize: "220px" }}
      />
      <Container className="relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-limestone">
              {site.description}
            </p>
            <p className="mt-6 font-body text-xs tracking-widest2 uppercase text-limestone/70">
              {site.oab}
            </p>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="mt-5 inline-flex text-ivory/80 hover:text-ivory"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-widest2 uppercase text-limestone/70">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-body text-sm text-ivory hover:text-limestone">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contato" className="font-body text-sm text-ivory hover:text-limestone">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-widest2 uppercase text-limestone/70">
              Atuação
            </h3>
            <ul className="mt-5 space-y-3">
              {pillars.map((p) => (
                <li key={p.title} className="font-body text-sm text-ivory/90">
                  {p.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-widest2 uppercase text-limestone/70">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 font-body text-sm text-ivory/90">
              <li>{site.address.street}</li>
              <li>{site.address.district}, {site.address.city} - {site.address.state}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-limestone">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="hover:text-limestone">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-xs text-limestone/60 md:flex-row md:items-center md:justify-between">
          <p className="font-body">
            © {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.
          </p>
          <p className="font-body">
            Este site não constitui aconselhamento jurídico. Consulte um advogado sobre seu caso.
          </p>
        </div>
      </Container>
    </footer>
  );
}
