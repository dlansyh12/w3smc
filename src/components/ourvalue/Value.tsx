'use client';

import styles from './Value.module.css';
import { motion } from 'framer-motion';

export default function ValueSection() {
  const values = [
    {
      // ✅ Web3 Learning
      icon: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.9972 28.2812L24.9965 18.352L38.1431 14.8285C38.6765 14.6855 38.9931 14.1372 38.8501 13.6037C38.7071 13.0702 38.1588 12.7537 37.6253 12.8967L24.9964 16.2814L24.996 11.1647C24.996 10.7116 25.2998 10.3157 25.7366 10.1988L41.2885 6.03679C41.7683 5.90815 42.03 6.09972 42.03 6.53478V35.9568C42.03 36.6026 41.4432 37.3467 40.771 37.5269L24.2434 41.9508C24.0203 42.0134 23.9644 42.0129 23.7675 41.9561L7.25912 37.5269C6.58683 37.3467 6 36.6026 6 35.9568V6.53478C6 6.09972 6.26169 5.90815 6.74103 6.03667L19.6608 9.5046C20.1942 9.64777 20.7426 9.33143 20.8858 8.79803C21.029 8.26463 20.7126 7.71615 20.1792 7.57297L7.25924 4.10497C5.5304 3.64144 4 4.76176 4 6.53478V35.9568C4 37.5189 5.20508 39.0469 6.74103 39.4587L23.2309 43.8826C23.7643 44.0369 24.1996 44.0404 24.7723 43.8796L41.2886 39.4588C42.8249 39.0469 44.03 37.5189 44.03 35.9568V6.53478C44.03 4.76176 42.4996 3.64144 40.771 4.1049L25.2195 8.26678C23.9078 8.61795 22.996 9.80638 22.996 11.1648L22.9964 16.8174L21.6933 17.1667C21.1599 17.3096 20.8433 17.858 20.9863 18.3915C21.1293 18.9249 21.6776 19.2415 22.2111 19.0985L22.9966 18.888L22.9973 28.8172L21.6933 29.1667C21.1599 29.3096 20.8433 29.858 20.9863 30.3915C21.1293 30.9249 21.6776 31.2415 22.2111 31.0985L22.9974 30.8877L22.998 38.9189C22.998 39.4711 23.4458 39.9188 23.9981 39.9188C24.5504 39.9187 24.998 39.471 24.998 38.9187L24.9974 30.3517L38.1431 26.8285C38.6765 26.6855 38.9931 26.1372 38.8501 25.6037C38.7071 25.0702 38.1588 24.7537 37.6253 24.8967L24.9972 28.2812Z"
            fill="#ffffff"
          />
        </svg>
      ),
      title: 'Web3 Learning',
      desc: 'Learn the fundamentals of Web3 and blockchain.',
    },
    {
      // ✅ Web3 Jobs
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
          <path
            d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Web3 Jobs',
      desc: 'Discover opportunities in decentralized projects.',
    },
    {
      // ✅ Market Outlook (rapihin posisi & centering)
      icon: (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
          <g transform="translate(40, 40)">
            <path
              d="M21.333,0h64v277.333h-64V0zM128,128h64v149.333h-64V128zM341.333,85.333h64v192h-64v-192zM234.667,42.667h64v234.667h-64V42.667zM0,298.667h426.667v42.667H0v-42.667z"
              fill="#ffffff"
            />
          </g>
        </svg>
      ),
      title: 'Market Outlook',
      desc: 'Stay updated with the latest crypto insights.',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
          <circle cx="32" cy="32" r="6" fill="#fff"/>
          <circle cx="10" cy="32" r="5" fill="#fff"/>
          <circle cx="54" cy="32" r="5" fill="#fff"/>
          <circle cx="32" cy="10" r="5" fill="#fff"/>
          <circle cx="32" cy="54" r="5" fill="#fff"/>
          <line x1="10" y1="32" x2="32" y2="10" stroke="#fff" strokeWidth="2"/>
          <line x1="10" y1="32" x2="32" y2="54" stroke="#fff" strokeWidth="2"/>
          <line x1="54" y1="32" x2="32" y2="10" stroke="#fff" strokeWidth="2"/>
          <line x1="54" y1="32" x2="32" y2="54" stroke="#fff" strokeWidth="2"/>
          <line x1="10" y1="32" x2="54" y2="32" stroke="#fff" strokeWidth="2"/>
        </svg>
      ),
      title: 'Connect with Others',
      desc: 'Expand your Web3 network and collaborate globally.',
    }    
  ];

  return (
    <section className={styles.value} id="value">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What You Can <span>Get</span>
      </motion.h2>

      <div className={styles.cards}>
        {values.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.iconBox}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
