'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SupportW3SMC.module.css';
import { FiCopy } from 'react-icons/fi';

export default function SupportW3SMC() {
  const walletAddress = '0x09D0411E4a52C7585F03EA921c5dD9cc6B81CcA3';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <section className={styles.support} id="support">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Support <span>W3SMC</span>
      </motion.h2>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        If you like what we are building, feel free to support us by sending any amount to our official EVM wallet address.
      </motion.p>

      <motion.div
        className={styles.walletWrapper}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
      >
        <div className={styles.walletBox}>
          <span className={styles.address}>{walletAddress}</span>
          <button className={styles.copyBtn} onClick={handleCopy}>
            <FiCopy size={20} color="#fff" />
          </button>
        </div>

        <AnimatePresence>
          {copied && (
            <motion.div
              className={styles.copiedToast}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              Copied!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
