"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./menu.module.css";
import { Button } from "../Button";
import { HiMenuAlt3 } from "react-icons/hi";

import { MenuLinks as links } from "@/lib/constants/links";

export const MenuLink = ({ title, linkTo = "#", active, onClick }) => {
  return (
    <Link
      href={linkTo}
      className={[styles.link, active ? styles.active : ""].join(" ")}
      onClick={onClick}
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
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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
              onClick={closeMenu}
            />
          );
        })}
      </div>
    </>
  );
};
