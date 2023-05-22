import { Menu } from "@/lib/components/Menu";
import { Logo } from "../../components/Logo";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.branding}>
          <Logo logoStyle="filled" size={16} />
          <h1>Kotyarishka</h1>
        </div>

        <Menu />
      </nav>
    </header>
  );
};
