'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <motion.div
        className={styles.titleWrapper}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>
          What is <span>W3SMC?</span>
        </h2>
      </motion.div>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        We are a <strong>Web3 Social Media Community</strong> — connecting developers,
        creators, and innovators to build the decentralized future together.
        Join a growing movement that celebrates collaboration and creativity in the world of Web3.
      </motion.p>

      <motion.div
        className={styles.statHighlight}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
      >
        <div className={styles.statBox}>
          <motion.h3
            className={styles.statNumber}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            +900
          </motion.h3>
          <p>Total Members Joined</p>
        </div>
      </motion.div>
    </section>
  );
}
