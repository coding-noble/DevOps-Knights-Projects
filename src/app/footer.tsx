import React from 'react';
import styles from './page.module.css'; // Use the same or a new CSS module.

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 DevOps Knights. All rights reserved.</p>
      <ul className={styles.socialLinks}>
        <li><a href="https://twitter.com">Twitter</a></li>
        <li><a href="https://github.com">GitHub</a></li>
        <li><a href="https://linkedin.com">LinkedIn</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
