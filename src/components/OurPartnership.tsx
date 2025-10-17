'use client';

import { motion } from 'framer-motion';
import styles from './OurPartnership.module.css';
import Image from 'next/image';
import Partner1Logo from '../../public/partner1.png';
import Partner2Logo from '../../public/partner2.png';

const partners = [
  { name: 'Partner 1', logo: Partner1Logo, url: 'https://x.com/historymakersio' },
  { name: 'Partner 2', logo: Partner2Logo, url: 'https://rnjtoken.io' },
];

export default function OurPartnership() {
  return (
    <section className={styles.partnership} id="partnership">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Partnership
      </motion.h2>

      <motion.div
        className={styles.partnerLogos}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {partners.map((p, idx) => (
          <motion.a
            key={idx}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.partnerCard}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={p.logo} alt={p.name} width={140} height={140} />
          </motion.a>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          Interested in partnering with <strong>W3SMC</strong>?{' '}
          <a
            href="https://x.com/WEB3SMC"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
          >
            DM us on Twitter
          </a>
        </p>
      </motion.div>
    </section>
  );
}
