import Link from "next/link";
import styles from "./footer.module.css";
import { Logo } from "@/lib/components/Logo";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.row}>
            <div className={styles.infos}>
              <Logo logoStyle="filled" size={18} /> Kotyarishka{" "}
              <span>
                <Link href={"mailto:kotyarishka@gmail.com"}>
                    kotyarishka@gmail.com
                </Link>
              </span>
            </div>
            <div className={styles.occupation}>Full-stack developer.</div>
          </div>
          <div className={[styles.row, styles.media].join(" ")}>
            <h3>Media</h3>
            <div>
                <Link href={"https://github.com/Kotyarishka"}><FaGithub /></Link>
                <Link href={"https://discord.com/users/332618875684519946"}><FaDiscord /></Link>
                <Link href={"https://t.me/kotyarishka"}><FaTelegram /></Link>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
            <p>© Copyright 2022. Made by Kotyarishka</p>
            <p>Design made by <Link href={"https://elias-dev.ml/"}>Elias</Link> &#40;modified by me&#41; and can be found <Link href={"https://www.figma.com/community/file/1164933568884615740"}>here</Link>.</p>
            <p>View this portfolio on <Link href={"https://github.com/Kotyarishka/portfolio"}>GitHub</Link>.</p>
        </div>
      </div>
    </footer>
  );
};
