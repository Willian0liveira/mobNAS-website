import styles from "./LegalHero.module.css";

export function LegalHero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>Termo de Uso e Política de Privacidade</h1>
        <p className={styles.update}>Última atualização: junho de 2026</p>
      </div>
    </section>
  );
}
