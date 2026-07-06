import { FeatureCard } from "@/components/FeatureCard";
import styles from "./Features.module.css";

const features = [
  {
    title: "Gerenciamento de Arquivos",
    description:
      "Navegue, crie, renomeie, mova, copie e exclua arquivos diretamente pelo navegador ou aplicativo.",
  },
  {
    title: "Upload & Download",
    description:
      "Envie arquivos grandes e baixe quando quiser. Tudo direto do seu celular.",
  },
  {
    title: "Vários Usuários",
    description:
      "Crie contas para família e amigos. Cada um com seu próprio acesso e nível de permissão.",
  },
  {
    title: "Compartilhamento",
    description:
      "Crie links para enviar arquivos para quem quiser. Com ou sem senha, com validade de 1 hora a para sempre.",
  },
  {
    title: "Segurança Integrada",
    description:
      "Tenha privacidade e seus dados protegidos, conexão criptografada via Tunnel Cloudflare.",
  },
  {
    title: "Acesso Universal",
    description:
      "Funciona com Windows Explorer, macOS Finder, Linux e qualquer gerenciador de arquivos do Android.",
  },
  {
    title: "Ligado 24 Horas",
    description:
      "Funciona sem parar mesmo com o app em segundo plano. Monitora a saúde do seu dispositivo.",
  },
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className={styles.showcase}>
          <div className={styles.devices}>
            <img
              className={styles.monitor}
              src="/assets/images/tela_1.webp"
              alt="Dashboard de monitoramento do mobNAS — interface web para gerenciar arquivos"
              width={900}
              height={506}
            />
          </div>
          <p className={styles.caption}>
            <span className="text-accent">Monitore</span> recursos e arquivos
            pela web
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              iconIndex={i}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
