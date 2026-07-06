import Link from "next/link";
import { WEBSITE_URL, EMAIL } from "@/constants/links";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div>
          <img
            src="/assets/images/mob_nas_icon.webp"
            alt="mobNAS"
            width={160}
            height={160}
            className={styles.logo}
            loading="lazy"
          />
          <p className={styles.brandDescription}>
            Transforme seu dispositivo Android em um servidor NAS pessoal.
            Acesse, gerencie e compartilhe arquivos de qualquer lugar.
          </p>
        </div>
        <div className={styles.links}>
          <div>
            <h4 className={styles.colTitle}>Produto</h4>
            <ul className={styles.colList}>
              <li className={styles.colItem}>
                <Link href="/#features" className={styles.colLink}>
                  Recursos
                </Link>
              </li>
              <li className={styles.colItem}>
                <Link href="/#how-it-works" className={styles.colLink}>
                  Como Funciona
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.colList}>
              <li className={styles.colItem}>
                <Link href="/termos" className={styles.colLink}>
                  Termos de Uso e Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.colTitle}>Contato</h4>
            <ul className={styles.colList}>
              <li className={styles.colItem}>
                <a href={`mailto:${EMAIL}`} className={styles.colLink}>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.bottomText}>
            &copy; 2026{" "}
            <a href={WEBSITE_URL} target="_blank" rel="noopener">
              Wbyte Sistemas
            </a>
            . Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
