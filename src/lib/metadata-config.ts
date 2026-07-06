import type { Metadata } from "next";

export const BASE_URL = "https://mobnas.com.br";

const SITE_NAME = "mobNAS";

const OG_IMAGE = {
  url: "/assets/images/opengraphimage.webp",
  width: 1200,
  height: 630,
  alt: "mobNAS — Sua nuvem mobile pessoal",
};

export const openGraphDefaults: Metadata["openGraph"] = {
  type: "website",
  siteName: SITE_NAME,
  title: "mobNAS | Sua nuvem mobile pessoal",
  description:
    "Transforme seu dispositivo Android em um NAS pessoal. Servidor de arquivos, mídia e compartilhamento com acesso remoto seguro via Cloudflare Tunnel.",
  locale: "pt_BR",
  images: [OG_IMAGE],
};

export const twitterDefaults: Metadata["twitter"] = {
  card: "summary_large_image",
  title: "mobNAS | Sua nuvem mobile pessoal",
  description:
    "Transforme seu dispositivo Android em um NAS pessoal. Servidor de arquivos, mídia e compartilhamento com acesso remoto seguro via Cloudflare Tunnel.",
  images: [OG_IMAGE],
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "mobNAS | Sua nuvem mobile pessoal",
    template: "%s — mobNAS",
  },

  description:
    "Transforme dispositivos Android em nuvem de arquivos pessoal. Servidor NAS com upload, download, múltiplos usuários, compartilhamento com senha e acesso remoto criptografado via Cloudflare Tunnel. Substitua serviços de armazenamento pagos.",

  applicationName: "mobNAS",

  generator: "Next.js",

  keywords: [
    "NAS",
    "Android NAS",
    "servidor de arquivos",
    "armazenamento pessoal",
    "nuvem pessoal",
    "Cloudflare Tunnel",
    "compartilhamento de arquivos",
    "servidor Android",
    "Network Attached Storage",
    "upload download Android",
    "mobNAS",
    "Wbyte Sistemas",
    "armazenamento gratuito",
    "servidor FTP Android",
    "acesso remoto arquivos",
  ],

  authors: [{ name: "Wbyte Sistemas", url: "https://wbytesistemas.com.br" }],
  creator: "Wbyte Sistemas",
  publisher: "Wbyte Sistemas",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: openGraphDefaults,

  twitter: twitterDefaults,

  icons: {
    icon: [
      { url: "/assets/images/favicon.ico" },
      { url: "/assets/images/mob_nas_icon.webp", sizes: "192x192", rel: "icon" },
    ],
    apple: [{ url: "/assets/images/mob_nas_icon.webp" }],
  },

  appleWebApp: {
    capable: true,
    title: "mobNAS",
    statusBarStyle: "black-translucent",
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      "pt-BR": BASE_URL,
    },
  },

  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE,
        },
      }
    : {}),

  other: {
    "google-play-app": "app-id=com.wbytesistemas.mob_nas",
    "apple-itunes-app": "",
    "theme-color": "#0a0a0f",
    "color-scheme": "dark",
    "application-name": "mobNAS",
  },
};
