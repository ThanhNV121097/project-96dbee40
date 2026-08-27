import styles from "./HelloWorldPage.module.css";
import { helloWorldPageMock } from "../lib/mock/hello-world-page";

export function HelloWorldPage() {
  return (
    <main className={styles.card} aria-label="Hello World screen">
      <h1 className={styles.heading}>
        {helloWorldPageMock.heading}
      </h1>
    </main>
  );
}
