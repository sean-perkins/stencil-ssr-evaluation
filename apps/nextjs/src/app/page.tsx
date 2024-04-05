import dynamic from "next/dynamic";
import styles from "./page.module.css";

import { renderToString } from "../../../../packages/ui/hydrate";

export default async function Home() {
  const { html } = await renderToString(
    '<my-component first="John" last="Doe"></my-component>'
  );

  const updatedHtml = html
    .replace(/data-stencil-build="[^"]*"/, "")
    .replace(/class="[^"]*"/, "");

  const MyComponent = dynamic(() => import("./components/MyComponent"), {
    loading: () => (
      <span dangerouslySetInnerHTML={{ __html: updatedHtml }}></span>
    ),
  });
  return (
    <main className={styles.main}>
      <MyComponent first="John" last="Doe" />
    </main>
  );
}
