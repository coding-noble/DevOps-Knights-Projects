import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
        <h1>DevOps Knights</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;