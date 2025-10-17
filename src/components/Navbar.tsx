'use client';

import styles from './Navbar.module.css';
import LogoImg from '../../public/logo.png';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src={LogoImg}
          alt="W3SMC Logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      <button
        className={styles.joinBtn}
        onClick={() => window.open('https://t.me/w3smc', '_blank')}
      >
        Join W3SMC
      </button>
    </nav>
  );
}
