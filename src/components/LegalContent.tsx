import { Button } from "@/components/Button";
import { WEBSITE_URL, EMAIL } from "@/constants/links";
import styles from "./LegalContent.module.css";

const tocSections = [
  "Uso do Serviço",
  "Elegibilidade",
  "Responsabilidades do Usuário",
  "Privacidade e Dados",
  "Segurança",
  "Licenciamento e Propriedade Intelectual",
  "Limitação de Responsabilidade",
  "Modo NAS e Operação em Segundo Plano",
  "Alterações nos Termos",
  "Disposições Gerais",
  "Contato",
];

export function LegalContent() {
  return (
    <section className={styles.content}>
      <div className={`container ${styles.container}`}>
        <div className={styles.toc}>
          <h4 className={styles.tocTitle}>Sumário</h4>
          <ol className={styles.tocList}>
            {tocSections.map((title, i) => (
              <li key={i} className={styles.tocItem}>
                <a href={`#sec${i + 1}`} className={styles.tocLink}>
                  {title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <article id="sec1" className={styles.article}>
          <h2 className={styles.articleTitle}>1. Uso do Serviço</h2>
          <p className={styles.paragraph}>
            O mobNAS é um servidor de arquivos pessoal que permite o acesso remoto aos seus arquivos através de dispositivos Android. O aplicativo transforma seu dispositivo em um NAS (Network Attached Storage) pessoal, acessível localmente ou pela internet.
          </p>
          <p className={styles.paragraph}>
            O usuário é o único e exclusivo responsável por todo o conteúdo armazenado, gerenciado, compartilhado ou transmitido através do serviço. O mobNAS é uma ferramenta de infraestrutura — não hospedamos, moderamos ou temos acesso ao conteúdo armazenado pelos usuários.
          </p>
        </article>

        <article id="sec2" className={styles.article}>
          <h2 className={styles.articleTitle}>2. Elegibilidade</h2>
          <p className={styles.paragraph}>Ao utilizar o mobNAS, você declara que:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>É maior de idade ou possui autorização legal para uso do serviço</li>
            <li className={styles.listItem}>Utilizará o aplicativo em conformidade com todas as leis locais, nacionais e internacionais aplicáveis</li>
            <li className={styles.listItem}>Não utilizará o serviço para fins ilícitos ou não autorizados</li>
          </ul>
        </article>

        <article id="sec3" className={styles.article}>
          <h2 className={styles.articleTitle}>3. Responsabilidades do Usuário</h2>
          <p className={styles.paragraph}>O usuário se compromete a:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Não utilizar o serviço para armazenar, distribuir ou transmitir conteúdo ilegal, incluindo mas não se limitando a material protegido por direitos autorais sem autorização, conteúdo de abuso infantil, material terrorista, ou qualquer outro conteúdo proibido por lei</li>
            <li className={styles.listItem}>Não utilizar o serviço para violar direitos de propriedade intelectual de terceiros</li>
            <li className={styles.listItem}>Manter suas credenciais de acesso em sigilo absoluto, sendo o único responsável por atividades realizadas em sua conta</li>
            <li className={styles.listItem}>Não utilizar o serviço para praticar qualquer atividade ilícita, incluindo invasão de privacidade, difamação, cyberbullying ou qualquer forma de assédio</li>
            <li className={styles.listItem}>Respeitar as leis locais aplicáveis ao uso do serviço, especialmente as Leis nº 12.965/2014 (Marco Civil da Internet) e nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD)</li>
            <li className={styles.listItem}>Realizar backups periódicos dos dados armazenados</li>
          </ul>
        </article>

        <article id="sec4" className={styles.article}>
          <h2 className={styles.articleTitle}>4. Privacidade e Dados</h2>
          <p className={styles.paragraph}>
            O mobNAS opera localmente no seu dispositivo Android. Nenhum dado pessoal, arquivo ou informação é enviado para servidores externos controlados pela Wbyte Sistemas.
          </p>

          <h3 className={styles.articleSubtitle}>4.1. Dados armazenados localmente</h3>
          <p className={styles.paragraph}>O aplicativo armazena localmente no dispositivo:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Configurações do aplicativo (porta do servidor, tema, preferências de interface)</li>
            <li className={styles.listItem}>Registros de atividade (logs) — histórico de acessos, uploads, downloads e eventos do sistema</li>
            <li className={styles.listItem}>Credenciais de usuários — armazenadas com criptografia PBKDF2</li>
            <li className={styles.listItem}>Metadados de compartilhamento — links gerados, prazos de expiração e senhas de compartilhamento</li>
          </ul>
          <p className={styles.paragraph}>
            Estes dados permanecem exclusivamente no seu dispositivo e podem ser removidos a qualquer momento através do aplicativo ou desinstalação.
          </p>

          <h3 className={styles.articleSubtitle}>4.2. Cloudflare Tunnel</h3>
          <p className={styles.paragraph}>
            Quando o usuário configura o Cloudflare Tunnel para acesso remoto, uma conexão criptografada TLS é estabelecida entre seu dispositivo e a infraestrutura da Cloudflare. A Cloudflare atua como proxy reverso e pode ter acesso a:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Endereço IP do dispositivo</li>
            <li className={styles.listItem}>Metadados da conexão (portas, protocolos)</li>
            <li className={styles.listItem}>Domínio público configurado</li>
          </ul>
          <p className={styles.paragraph}>
            A Wbyte Sistemas não tem acesso a estes dados. Recomendamos consultar a Política de Privacidade da Cloudflare para maiores informações sobre o tratamento de dados pela Cloudflare Inc.
          </p>

          <h3 className={styles.articleSubtitle}>4.3. Compartilhamento de arquivos</h3>
          <p className={styles.paragraph}>
            Links de compartilhamento gerados pelo usuário são armazenados localmente. O conteúdo compartilhado através de links é servido diretamente do dispositivo do usuário, sem intermédio de servidores terceiros.
          </p>

          <h3 className={styles.articleSubtitle}>4.4. Direitos do titular (LGPD)</h3>
          <p className={styles.paragraph}>
            Em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), você tem direito a:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Confirmação e acesso:</strong> saber quais dados estão armazenados</li>
            <li className={styles.listItem}><strong>Correção:</strong> solicitar a correção de dados incompletos ou desatualizados</li>
            <li className={styles.listItem}><strong>Exclusão:</strong> solicitar a exclusão dos dados armazenados (através do próprio aplicativo)</li>
            <li className={styles.listItem}><strong>Portabilidade:</strong> solicitar a exportação dos dados (quando aplicável)</li>
          </ul>
          <p className={styles.paragraph}>
            Como todos os dados permanecem no seu dispositivo, você exerce controle total sobre eles diretamente pelo aplicativo.
          </p>
        </article>

        <article id="sec5" className={styles.article}>
          <h2 className={styles.articleTitle}>5. Segurança</h2>
          <p className={styles.paragraph}>O mobNAS emprega as seguintes medidas de segurança:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Criptografia de senhas:</strong> utilizamos PBKDF2 com salt para armazenamento seguro de senhas</li>
            <li className={styles.listItem}><strong>Autenticação JWT:</strong> tokens JSON Web Token para sessões seguras com validade de 24 horas</li>
            <li className={styles.listItem}><strong>Refresh tokens:</strong> para renovação segura de sessões sem reenvio de credenciais</li>
            <li className={styles.listItem}><strong>Rate limiting:</strong> limitação de tentativas de login para prevenção de ataques de força bruta</li>
            <li className={styles.listItem}><strong>Bloqueio por tentativas:</strong> após 5 tentativas consecutivas de login com falha, o usuário é bloqueado por 15 minutos</li>
            <li className={styles.listItem}><strong>Registro de tentativas:</strong> todas as tentativas de login (sucesso e falha) são registradas com IP, data e dispositivo</li>
            <li className={styles.listItem}><strong>HTTPS recomendado:</strong> o acesso remoto via Cloudflare Tunnel utiliza criptografia TLS</li>
          </ul>
        </article>

        <article id="sec6" className={styles.article}>
          <h2 className={styles.articleTitle}>6. Licenciamento e Propriedade Intelectual</h2>
          <p className={styles.paragraph}>
            O mobNAS é um software proprietário desenvolvido pela Wbyte Sistemas. O usuário recebe uma licença limitada, não exclusiva e intransferível para uso pessoal do aplicativo.
          </p>
          <p className={styles.paragraph}>É proibido:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Realizar engenharia reversa, descompilar ou modificar o código do aplicativo</li>
            <li className={styles.listItem}>Distribuir, sublicenciar ou revender o aplicativo</li>
            <li className={styles.listItem}>Utilizar o aplicativo para prestar serviços comerciais a terceiros sem autorização expressa</li>
          </ul>
        </article>

        <article id="sec7" className={styles.article}>
          <h2 className={styles.articleTitle}>7. Limitação de Responsabilidade</h2>
          <p className={styles.paragraph}>
            O mobNAS é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas, incluindo mas não se limitando a garantias de comercialização, adequação a um propósito específico ou não violação.
          </p>
          <p className={styles.paragraph}>A Wbyte Sistemas não se responsabiliza por:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Perda, corrupção ou vazamento de dados armazenados através do aplicativo</li>
            <li className={styles.listItem}>Acesso não autorizado ao dispositivo ou aos arquivos do usuário</li>
            <li className={styles.listItem}>Danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou da impossibilidade de uso do aplicativo</li>
            <li className={styles.listItem}>Interrupções do serviço causadas por falhas de rede, energia, hardware do dispositivo ou serviços de terceiros (Cloudflare, provedores de internet, etc.)</li>
            <li className={styles.listItem}>Conteúdo armazenado ou compartilhado pelo usuário que viole direitos de terceiros ou a legislação aplicável</li>
          </ul>
          <p className={styles.paragraph}>O usuário é o único responsável por:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Manter backups atualizados de seus dados</li>
            <li className={styles.listItem}>Garantir a segurança de sua rede e dispositivo</li>
            <li className={styles.listItem}>Cumprir a legislação aplicável ao conteúdo que armazena e compartilha</li>
          </ul>
        </article>

        <article id="sec8" className={styles.article}>
          <h2 className={styles.articleTitle}>8. Modo NAS e Operação em Segundo Plano</h2>
          <p className={styles.paragraph}>O Modo NAS permite que o aplicativo opere de forma contínua, utilizando:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>WakeLock:</strong> mantém o dispositivo acordado para operação ininterrupta</li>
            <li className={styles.listItem}><strong>Foreground Service:</strong> mantém o servidor ativo mesmo com o aplicativo em segundo plano</li>
            <li className={styles.listItem}><strong>Boot Receiver:</strong> inicia automaticamente o servidor após reinicialização do dispositivo (quando configurado)</li>
          </ul>
          <p className={styles.paragraph}>O uso contínuo do Modo NAS pode impactar:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Consumo de bateria:</strong> maior consumo devido à manutenção do servidor ativo</li>
            <li className={styles.listItem}><strong>Desgaste do dispositivo:</strong> operação contínua pode gerar aquecimento e desgaste do hardware</li>
            <li className={styles.listItem}><strong>Uso de dados móveis:</strong> quando configurado para acesso remoto via rede móvel</li>
          </ul>
          <p className={styles.paragraph}>
            O usuário deve monitorar a temperatura e saúde do dispositivo durante o uso prolongado.
          </p>
        </article>

        <article id="sec9" className={styles.article}>
          <h2 className={styles.articleTitle}>9. Alterações nos Termos</h2>
          <p className={styles.paragraph}>
            Estes termos podem ser atualizados periodicamente para refletir mudanças no aplicativo, na legislação aplicável ou em práticas de mercado.
          </p>
          <p className={styles.paragraph}>
            O usuário será notificado sobre alterações significativas através do próprio aplicativo na próxima inicialização após a atualização dos termos.
          </p>
          <p className={styles.paragraph}>
            O uso continuado do serviço após a publicação de alterações constitui aceitação expressa dos novos termos. Caso não concorde com as alterações, o usuário deve interromper o uso do aplicativo.
          </p>
        </article>

        <article id="sec10" className={styles.article}>
          <h2 className={styles.articleTitle}>10. Disposições Gerais</h2>

          <h3 className={styles.articleSubtitle}>10.1. Legislação aplicável</h3>
          <p className={styles.paragraph}>
            Este Termo de Uso é regido pelas leis da República Federativa do Brasil, especialmente o Código Civil (Lei nº 10.406/2002), o Marco Civil da Internet (Lei nº 12.965/2014) e a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
          </p>

          <h3 className={styles.articleSubtitle}>10.2. Foro</h3>
          <p className={styles.paragraph}>
            Fica eleito o foro da cidade de São Paulo, SP, Brasil, com exclusão de qualquer outro, por mais privilegiado que seja, para dirimir quaisquer controvérsias decorrentes destes termos.
          </p>

          <h3 className={styles.articleSubtitle}>10.3. Aceitação</h3>
          <p className={styles.paragraph}>
            Ao utilizar o mobNAS, você declara ter lido, compreendido e concordado com todos os termos e condições aqui estabelecidos.
          </p>
        </article>

        <article id="sec11" className={styles.article}>
          <h2 className={styles.articleTitle}>11. Contato</h2>
          <p className={styles.paragraph}>
            Para questões relacionadas a estes termos, entre em contato:
          </p>
          <p className={styles.paragraph}>
            <strong><a href={WEBSITE_URL} target="_blank" rel="noopener">Wbyte Sistemas</a></strong><br />
            E-mail: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p className={styles.copyright}>
            &copy; 2026 <a href={WEBSITE_URL} target="_blank" rel="noopener">Wbyte Sistemas</a>. Todos os direitos reservados.
          </p>
        </article>

        <div className={styles.back}>
          <Button href="/" variant="primary">&larr; Voltar para o início</Button>
        </div>
      </div>
    </section>
  );
}
