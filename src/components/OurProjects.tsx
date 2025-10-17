'use client';

import { motion } from 'framer-motion';
import styles from './OurProjects.module.css';

const projects = [1, 2, 3]; 

export default function OurProjects() {
  return (
    <section className={styles.projects} id="projects">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our <span>Projects</span>
      </motion.h2>

      <motion.div
        className={styles.cardsWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            className={styles.projectCard}
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
          >
            <div className={styles.blurOverlay}></div>
            <span className={styles.comingSoon}>Coming Soon</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
