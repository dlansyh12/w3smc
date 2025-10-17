'use client';

import styles from './Hero.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
  const telegramLink = 'https://t.me/w3smc'; 

  const handleScrollToPartnership = () => {
    const section = document.getElementById('partnership');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Web3 <span>Social Media Community</span>
        </motion.h1>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          W3SMC is a collective of developers, creators, and innovators 
          shaping the decentralized future — one project at a time.
        </motion.p>

        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a 
            href={telegramLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.primaryBtn}
          >
            Join W3SMC
          </a>
          <button 
            className={styles.secondaryBtn} 
            onClick={handleScrollToPartnership}
          >
            Our Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
}
