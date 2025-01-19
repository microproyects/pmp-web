import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>PMP <span>Papu Micro Proyects</span></h1>
      </main>
      <footer className={styles.footer}>
        <p> Todos los derechos reservados por el CEO xd</p>
      </footer>
    </div>
  );
}
