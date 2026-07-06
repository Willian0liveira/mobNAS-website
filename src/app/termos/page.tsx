import type { Metadata } from "next";
import { LegalHero } from "@/components/LegalHero";
import { LegalContent } from "@/components/LegalContent";
import { OrganizationJsonLd } from "@/lib/structured-data";
import { BASE_URL, openGraphDefaults, twitterDefaults } from "@/lib/metadata-config";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termo de Uso e Política de Privacidade do mobNAS — Wbyte Sistemas. Conheça seus direitos e responsabilidades.",
  openGraph: {
    ...openGraphDefaults,
    url: `${BASE_URL}/termos`,
  },
  twitter: {
    ...twitterDefaults,
  },
  alternates: {
    canonical: `${BASE_URL}/termos`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermosPage() {
  return (
    <>
      <OrganizationJsonLd
        name="Wbyte Sistemas"
        url="https://wbytesistemas.com.br"
        email="contato@wbytesistemas.com.br"
      />
      <LegalHero />
      <LegalContent />
    </>
  );
}
