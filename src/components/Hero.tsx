import { GooglePlayIcon } from "@/components/icons";
import { Button } from "@/components/Button";
import { GOOGLE_PLAY_URL } from "@/constants/links";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={`container ${styles.content}`}>
        <div className={styles.iconWrapper}>
          <img
            src="/assets/images/mob_nas_icon.webp"
            alt="mobNAS — ícone do aplicativo"
            width={380}
            height={380}
            className={styles.icon}
            loading="eager"
          />
        </div>
        <h1 className={styles.heading}>
          Sua nuvem <br />
          mobile pessoal
        </h1>
        <p className={styles.subtitle}>
          Transforme dispositivos Android em nuvem de arquivos como servidor.
          Diga adeus para serviços de armazenamento pagos mensalmente e tenha
          controle dos seus arquivos.
        </p>
        <div className={styles.actions}>
          <Button href={GOOGLE_PLAY_URL} variant="primary">
            <GooglePlayIcon size={18} />
            Baixar na Google Play
          </Button>
          <Button href="#features" variant="secondary">
            Conhecer Recursos
          </Button>
        </div>
      </div>
    </section>
  );
}
