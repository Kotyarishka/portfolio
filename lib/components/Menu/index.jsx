"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./menu.module.css";
import { Button } from "../Button";
import { HiMenuAlt3 } from "react-icons/hi";

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

export const MenuLink = ({ title, linkTo = "#", active }) => {
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

export const Menu = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Button onClick={toggleMenu} style="secondary" className={styles.menuButton}>
        <HiMenuAlt3 />
      </Button>

      <div className={[styles.links, !isMenuOpen ? styles.close : ""].join(" ")}>
        {links.map(({ linkTo, title, activeHandler = () => false }) => {
          return (
            <MenuLink
              key={title.toLowerCase()}
              title={title}
              linkTo={linkTo}
              active={activeHandler(path)}
            />
          );
        })}
      </div>
    </>
  );
};
