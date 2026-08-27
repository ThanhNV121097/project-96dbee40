import styles from "./HelloWorldPage.module.css";

export function HelloWorldPage() {
  return (
    <main aria-label="Hello World screen" className={styles.shell}>
      <section className={styles.card}>
        <h1 className={styles.heading}>Hello, World!</h1>
      </section>
    </main>
  );
}
