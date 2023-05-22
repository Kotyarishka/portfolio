"use client";

import Link from "next/link";
import { Logo } from "../Logo";

import styles from "./header.module.css";
import { usePathname } from "next/navigation";

const links = [
  {
    linkTo: "/",
    title: "home",
    activeHandler: (path) => path == "/",
  },
  {
    linkTo: "/projects",
    title: "projects",
    activeHandler: (path) => path.includes("/projects"),
  },
  {
    linkTo: "/about-me",
    title: "about-me",
    // activeHandler: (path) => path.includes("/projects"),
  },
  {
    linkTo: "/contacts",
    title: "contacts",
    // activeHandler: (path) => path.includes("/projects"),
  },
];

const HeaderLink = ({ title, linkTo = "#", active }) => {
  return (
    <Link
      href={linkTo}
      className={[styles.link, active ? styles.active : ""].join(" ")}
    >
      <span className={styles.hashtag}>#</span>
      {title}
    </Link>
  );
};

export const Header = () => {
  const path = usePathname();
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.branding}>
          <Logo logoStyle="filled" size={16} />
          <h1>Kotyarishka</h1>
        </div>

        <div className={styles.links}>
          {links.map(({ linkTo, title, activeHandler = () => false }) => {
            return (
              <HeaderLink
                key={title.toLowerCase()}
                title={title}
                linkTo={linkTo}
                active={activeHandler(path)}
              />
            );
          })}
        </div>
      </nav>
    </header>
  );
};
