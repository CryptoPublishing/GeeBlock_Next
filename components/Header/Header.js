'use client'
import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import HeaderLogo from "@/public/images/header-logo.svg";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
      <header className="fixed-header">
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <Link href="/">
              <HeaderLogo />
            </Link>
           
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>Explore</li>
              <li>Ecosystem</li>
              <li>Product</li>
              <li 
                className={styles.dropdown}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                Connect
                {showDropdown && (
                  <ul className={styles.dropdownMenu}>
                    <li>Whitepaper</li>
                    <li>Events</li>
                    <li>Grants</li>
                    <li>Media Release</li>
                  </ul>
                )}
              </li>
              <li>Roadmap</li>
            </ul>
          </nav>
          <button className={styles.btn}>
            🇺🇸 ENG
          </button>
        </div>
      </header>
    );
  }