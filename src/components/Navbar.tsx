"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { GooglePlayIcon } from "@/components/icons";
import { GOOGLE_PLAY_URL } from "@/constants/links";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest(`.${styles.navbar}`)) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [closeMenu]);

  const toggleClass = menuOpen ? styles.toggleActive : "";

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img
            src="/assets/images/mob_nas_icon.webp"
            alt="mobNAS"
            width={32}
            height={32}
            className={styles.logoIcon}
          />
        </Link>
        <button
          className={`${styles.toggle} ${toggleClass}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
        >
          <li>
            <Link
              href={pathname === "/" ? "#features" : "/#features"}
              className={`${styles.link} ${pathname === "/#features" ? styles.active : ""}`}
              onClick={closeMenu}
            >
              Recursos
            </Link>
          </li>
          <li>
            <Link
              href={pathname === "/" ? "#how-it-works" : "/#how-it-works"}
              className={`${styles.link} ${pathname === "/#how-it-works" ? styles.active : ""}`}
              onClick={closeMenu}
            >
              Como Funciona
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/Willian0liveira/mobNAS-documentacao"
              target="_blank"
              rel="noopener"
              className={styles.link}
              onClick={closeMenu}
            >
              Documentação
            </a>
          </li>
          <li>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener"
              className={`${styles.link} ${styles.cta}`}
              onClick={closeMenu}
            >
              
              Obtenha hoje
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
