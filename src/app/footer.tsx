import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 DevOps Knights. All rights reserved.</p>
      <ul className={styles.socialLinks}>
        <li><Link href="https://twitter.com">Twitter</Link></li>
        <li><Link href="https://github.com">GitHub</Link></li>
        <li><Link href="https://linkedin.com">LinkedIn</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
