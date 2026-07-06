import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "mobNAS — Sua nuvem mobile pessoal",
    short_name: "mobNAS",
    description:
      "Transforme seu dispositivo Android em um NAS pessoal. Servidor de arquivos, mídia e compartilhamento com acesso remoto seguro.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#00ff88",
    icons: [
      {
        src: "/assets/images/mob_nas_icon.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/assets/images/mob_nas_icon.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
