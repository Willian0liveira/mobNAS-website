import { GooglePlayIcon } from "@/components/icons";
import { Button } from "@/components/Button";
import { GOOGLE_PLAY_URL } from "@/constants/links";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.dataTraffic}>
        <div className={`${styles.dot} ${styles.dotHorizontal}`} style={{ top: 120, animationDuration: '72s', animationDelay: '0s' }} />
        <div className={`${styles.dot} ${styles.dotHorizontalRev}`} style={{ top: 240, animationDuration: '72s', animationDelay: '6s' }} />
        <div className={`${styles.dot} ${styles.dotVertical}`} style={{ left: 300, animationDuration: '72s', animationDelay: '12s' }} />
        <div className={`${styles.dot} ${styles.dotVerticalRev}`} style={{ left: 480, animationDuration: '72s', animationDelay: '18s' }} />
        <div className={`${styles.dot} ${styles.dotHorizontal}`} style={{ top: 420, animationDuration: '72s', animationDelay: '24s' }} />
        <div className={`${styles.dot} ${styles.dotHorizontalRev}`} style={{ top: 540, animationDuration: '72s', animationDelay: '30s' }} />
        <div className={`${styles.dot} ${styles.dotVertical}`} style={{ left: 660, animationDuration: '72s', animationDelay: '36s' }} />
        <div className={`${styles.dot} ${styles.dotVerticalRev}`} style={{ left: 840, animationDuration: '72s', animationDelay: '42s' }} />
        <div className={`${styles.dot} ${styles.dotHorizontal}`} style={{ top: 360, animationDuration: '72s', animationDelay: '48s' }} />
        <div className={`${styles.dot} ${styles.dotHorizontalRev}`} style={{ top: 180, animationDuration: '72s', animationDelay: '54s' }} />
        <div className={`${styles.dot} ${styles.dotVertical}`} style={{ left: 1020, animationDuration: '72s', animationDelay: '60s' }} />
        <div className={`${styles.dot} ${styles.dotVerticalRev}`} style={{ left: 120, animationDuration: '72s', animationDelay: '66s' }} />
      </div>
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
            Obtenha na Google Play
          </Button>
          <Button href="#features" variant="secondary">
            Conhecer Recursos
          </Button>
        </div>
      </div>
    </section>
  );
}
