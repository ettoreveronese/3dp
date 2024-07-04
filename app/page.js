import styles from "./page.module.css";
import Menu from "./_components/menu/menu.js";

const navbar = [];
export default function Home() {
  return (
    <main className={styles.main}>
      <Menu menu={navbar}></Menu>
    </main>
  );
}
