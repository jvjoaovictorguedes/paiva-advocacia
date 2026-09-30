export function whatsappHref(message = "Olá, gostaria de falar com a Paiva Advocacia e Consultoria.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "Paiva",
  fullName: "Paiva Advocacia e Consultoria",
  tagline: "Estratégia que gera resultados.",
  description:
    "Atuação jurídica e consultiva com clareza, precisão e visão de longo prazo.",
  descriptionShort:
    "Soluções jurídicas e consultivas para decisões com segurança e propósito.",
  oab: "OAB/SP 000.000",
  email: "contato@paivaadvocacia.com.br",
  phone: "+55 34 99251-2304",
  whatsapp: "5534992512304",
  address: {
    street: "Av. dos Vinhedos, 71 - Sala 103",
    district: "Morada da Colina",
    city: "Uberlândia",
    state: "MG",
    zip: "38411-159",
  },
  social: {
    linkedin: "https://linkedin.com/company/paiva-advocacia",
    instagram: "https://www.instagram.com/paivaadvocacia.br/",
  },
  nav: [
    { label: "Sobre", href: "/sobre" },
    { label: "Atuação", href: "/atuacao" },
    { label: "Consultoria", href: "/consultoria" },
    { label: "Artigos", href: "/artigos" },
  ],
};
