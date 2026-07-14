import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: 1,
    title: "Instale o App",
    description: "Baixe o mobNAS na Google Play.",
  },
  {
    number: 2,
    title: "Configure o Acesso",
    description: "Crie usuários, defina permissões e ative o servidor.",
  },
  {
    number: 3,
    title: "Acesso Remoto (Opcional)",
    description:
      "Acesse seus arquivos de qualquer lugar pela internet através de túneis criptografados da Cloudflare",
  },
  {
    number: 4,
    title: "Pronto!",
    description:
      "Seu servidor pessoal está online. Acesse pelo navegador, pelo app ou direto do navegador.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Como Funciona</span>
          <h2>Pronto em minutos</h2>
          <p>
            Do zero ao seu servidor pessoal em poucos passos. Sem IP fixo, sem
            configuração complicada.
          </p>
        </div>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
