import styles from "./HelloWorldPage.module.css";
import { helloWorldPageMock } from "../lib/mock/hello-world-page";

const cardStyle = {
  width: "min(760px, 100%)",
  minHeight: "min(70vh, 620px)",
} as const;

export function HelloWorldPage() {
  return (
    <main className={styles.card} aria-label="Hello World screen" style={cardStyle}>
      <h1 className={styles.heading}>{helloWorldPageMock.heading}</h1>
    </main>
  );
}
