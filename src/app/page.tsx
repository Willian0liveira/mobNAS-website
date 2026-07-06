import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import {
  OrganizationJsonLd,
  SoftwareApplicationJsonLd,
} from "@/lib/structured-data";
import { BASE_URL, openGraphDefaults, twitterDefaults } from "@/lib/metadata-config";

export const metadata: Metadata = {
  title: "Sua nuvem mobile pessoal",
  description:
    "Transforme dispositivos Android em nuvem de arquivos pessoal. Servidor NAS gratuito com upload, download, múltiplos usuários, compartilhamento com senha e acesso remoto criptografado via Cloudflare Tunnel.",
  openGraph: {
    ...openGraphDefaults,
    url: BASE_URL,
  },
  twitter: {
    ...twitterDefaults,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd
        name="Wbyte Sistemas"
        url="https://wbytesistemas.com.br"
        email="contato@wbytesistemas.com.br"
      />
      <SoftwareApplicationJsonLd
        name="mobNAS"
        description="Servidor de arquivos pessoal que transforma seu dispositivo Android em um NAS. Acesse, gerencie e compartilhe arquivos de qualquer lugar com segurança via Cloudflare Tunnel."
        url={BASE_URL}
        operatingSystem="Android"
        applicationCategory="UtilitiesApplication"
        offers={{
          price: "0",
          priceCurrency: "BRL",
        }}
      />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}
