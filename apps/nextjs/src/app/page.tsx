"use client";

import styles from "./page.module.css";
import { MyComponent } from "./proxies";

export default function Home() {
  return (
    <main className={styles.main}>
      <MyComponent first="John" last="Doe" />
    </main>
  );
}
