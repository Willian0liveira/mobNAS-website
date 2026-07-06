import { GooglePlayIcon } from "@/components/icons";
import { Button } from "@/components/Button";
import { GOOGLE_PLAY_URL } from "@/constants/links";
import styles from "./CTA.module.css";

export function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className={styles.title}>
          Pronto para transformar seu Android em um servidor pessoal?
        </h2>
        <p className={styles.subtitle}>
          O mobNAS já está disponível na Google Play. Baixe agora e transforme
          seu dispositivo em um NAS pessoal.
        </p>
        <Button href={GOOGLE_PLAY_URL} variant="primary">
          <GooglePlayIcon size={18} />
          Baixar na Google Play
        </Button>
      </div>
    </section>
  );
}
