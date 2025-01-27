import React from 'react';
import styles from './page.module.css'; // Use an existing CSS module or create a new one.

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/next.svg" alt="Logo" />
        <h1>DevOps Knights</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;