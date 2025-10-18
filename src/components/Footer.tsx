'use client';

import styles from './Footer.module.css';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.left}>
          <p className={styles.copy}>
            © {currentYear} W3SMC. All rights reserved.
          </p>
        </div>

        <div className={styles.right}>
          <a 
            href="https://x.com/WEB3SMC" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.social}
          >
            <FaXTwitter size={22} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
