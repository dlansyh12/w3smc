'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Cyberpunk-inspired color scheme with 55% blue / 45% red ratio
const COLORS = {
  primary: '#3b82f6', // blue-500
  secondary: '#ef4444', // red-500
  accent: '#8b5cf6', // purple-500
  dark: '#0f172a', // slate-900
  light: '#f8fafc' // slate-50
};

// 3D Floating Particles with Physics
const QuantumParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    z: number;
    size: number;
    speed: number;
    color: string;
    opacity: number;
    angle: number;
  }>>([]);

  useEffect(() => {
    const createParticle = () => {
      const isBlue = Math.random() < 0.55; // 55% blue particles
      return {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 100,
        size: Math.random() * 6 + 2,
        speed: Math.random() * 0.5 + 0.2,
        color: isBlue ? COLORS.primary : COLORS.secondary,
        opacity: Math.random() * 0.6 + 0.2,
        angle: Math.random() * Math.PI * 2
      };
    };

    const particlesArray = Array.from({ length: 60 }, createParticle);
    setParticles(particlesArray);

    let animationFrameId: number;
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(p => {
          // Update position with circular motion
          const newAngle = p.angle + p.speed * 0.01;
          const radius = 50 + p.size * 5;
          return {
            ...p,
            x: p.x + Math.cos(newAngle) * p.speed,
            y: p.y + Math.sin(newAngle) * p.speed,
            z: p.z + (Math.random() - 0.5) * 0.5,
            angle: newAngle,
            opacity: 0.3 + Math.sin(Date.now() * 0.001 + p.id) * 0.3
          };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            filter: `blur(${p.size / 2}px)`,
            transform: `translateZ(${p.z}px)`,
            willChange: 'transform, opacity'
          }}
          transition={{ type: 'spring', damping: 20 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50" />
    </div>
  );
};

// Holographic Grid with Parallax Effect
const HolographicGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        gridRef.current.style.transform = `perspective(1000px) rotateX(${y * 10 - 5}deg) rotateY(${x * 10 - 5}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-20">
      <motion.div
        ref={gridRef}
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:80px_80px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
    </div>
  );
};

// Cybernetic Neon Border
const CyberBorder = ({ children }: { children: React.ReactNode }) => {
  const borderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle = (angle + 0.3) % 360;
      if (borderRef.current) {
        const gradient = `linear-gradient(${angle}deg, 
          ${COLORS.primary}55, 
          ${COLORS.secondary}45, 
          ${COLORS.primary}55)`;
        borderRef.current.style.backgroundImage = gradient;
      }
      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative group">
      <div 
        ref={borderRef}
        className="absolute inset-0 rounded-xl p-[1.5px] pointer-events-none"
        style={{
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          backgroundSize: '200% 200%',
          animation: 'shine 3s infinite linear'
        }}
      />
      {children}
    </div>
  );
};

// Floating Tech Orb
const TechOrb = () => {
  return (
    <motion.div
      className="absolute rounded-full filter blur-xl"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.3, 0],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse'
      }}
      style={{
        background: `radial-gradient(circle, ${COLORS.primary}55, transparent 70%)`,
        width: '300px',
        height: '300px'
      }}
    />
  );
};

export default function CyberSpace() {
  const [projects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Project pertama W3SMC",
      image: "/project.jpg",
      tags: ["AI", "Blockchain", "Security"]
    },
    {
      id: 2,
      title: "Project 2",
      description: "Project kedua W3SMC",
      image: "/project.jpg",
      tags: ["DAO", "Quantum", "Governance"]
    },
    {
      id: 3,
      title: "Project 3",
      description: "Project ketiga W3SMC",
      image: "/project.jpg",
      tags: ["DeFi", "Social", "Web3"]
    },
    {
      id: 4,
      title: "Project 4",
      description: "Project keempat W3SMC",
      image: "/project.jpg",
      tags: ["NFT", "AR/VR", "Metaverse"]
    }
  ]);

  const [portfolioItems] = useState([
    {
      id: 1,
      title: "Portfolio 1",
      description: "Project Showcase From W3SMC Member.",
      image: "/project.jpg",
      category: "Web3",
      author: {
        name: "Member 1",
        initials: "P1",
        link: "https://twitter.com/cryptodev"
      }
    },
    {
      id: 2,
      title: "Portfolio 2",
      description: "Project Showcase From W3SMC Member.",
      image: "/project.jpg",
      category: "Governance",
      author: {
        name: "Member 2",
        initials: "P2",
        link: "https://twitter.com/daomaster"
      }
    },
    {
      id: 3,
      title: "Portfolio 3",
      description: "Project Showcase From W3SMC Member.",
      image: "/project.jpg",
      category: "DeFi",
      author: {
        name: "Member 3",
        initials: "P3",
        link: "https://twitter.com/defiwizard"
      }
    }
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Scroll-based animations
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div 
      className="bg-black text-white min-h-screen overflow-x-hidden"
      ref={containerRef}
    >
      <Head>
        <title>W3SMC | Web3 Social Media Community</title>
        <meta name="description" content="The future of decentralized social interaction" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <style jsx global>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>

      <QuantumParticles />
      <HolographicGrid />

      {/* Cybernetic Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent opacity-10" 
          style={{ 
            backgroundSize: '100% 4px',
            animation: 'scanline 8s linear infinite'
          }}
        />
      </div>

      {/* Futuristic Navigation Interface */}
      <motion.header 
        className="bg-black/80 backdrop-blur-lg py-4 px-6 md:py-5 md:px-10 flex items-center justify-between border-b border-gray-800/50 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/logo.png"
              alt="W3SMC Logo"
              className="h-10 md:h-12 w-auto"
            />
          </motion.div>
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              W3SMC
            </span>
          </Link>
        </div>

        {/* Holographic Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['About W3SMC', 'Vision & Mission', 'Portfolio Showcase', 'Latest Projects'].map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={`#${item.toLowerCase()}`} 
                className="relative text-gray-300 hover:text-white text-lg font-medium"
              >
                <span>{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Cybernetic Access Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <button className="relative overflow-hidden px-6 py-2.5 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-red-500/80 blur-md"></div>
            <span className="relative flex items-center text-white font-medium">
              Join W3SMC
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Mobile Quantum Interface */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </motion.header>

      {/* Quantum Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="flex flex-col space-y-6">
              {['About W3SMC', 'Vision & Mission', 'Portfolio Showcase', 'Latest Project'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-2xl text-gray-300 hover:text-white py-3 border-b border-gray-800/50 flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.button 
                className="mt-8 w-full py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg text-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join W3SMC
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Cybernetic Interface */}
      <main className="relative overflow-hidden">

        {/* Hero Quantum Gateway */}
        <section className="relative flex items-center justify-center pt-12 pb-30 md:pt-26 md:pb-20 px-4">
          <TechOrb />
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl"></div>
          
          <motion.div 
            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              className="max-w-4xl tracking-tighter mx-auto text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-red-500 bg-clip-text text-transparent">
                Web3 Social Media 
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Community
              </span>
            </motion.h1>

            <motion.p 
              className="max-w-2xl mx-auto text-xl text-gray-400 tracking-wide font-light leading-relaxed mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Disini kamu bisa belajar bersama, terkoneksi dan membangun bersama komunitas. semuanya ada disini.
            </motion.p>

            <motion.div 
              className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="https://t.me/w3smc"
                  className="relative group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300"></div>
                  <span className="relative flex items-center">
                    Join W3SMC
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="#support w3smc"
                  className="relative group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    Support W3SMC
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* About W3SMC */}
        <motion.section 
          id="about w3smc"
          className="py-28 bg-gradient-to-b from-gray-900/30 to-black border-t border-gray-800/50 relative"
          style={{ opacity, y }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                className="lg:w-1/2 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <CyberBorder>
                  <div className="relative rounded-xl overflow-hidden border border-gray-800/50 bg-gray-900/50">
                    <img 
                      src="/logo.png" 
                      alt="W3SMC" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">Web3 Social Media Community</h3>
                      <p className="text-blue-400 mt-2">W3SMC Logo.</p>
                    </div>
                  </div>
                </CyberBorder>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl z-0"></div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                    Apa itu W3SMC?
                  </span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    W3SMC (Web3 Social media Community) adalah sebuah komunitas yang fokus mendorong perkembangan ekosistem Web3 melalui peningkatan engagement dan penyelenggaraan event-event berskala masif. Kami hadir sebagai ruang kolaborasi terbuka bagi para pelaku, penggiat, hingga peminat teknologi blockchain, crypto, NFT, DeFi, GameFi, dan berbagai inovasi berbasis Web3 lainnya
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Di tengah perkembangan pesat industri Web3, W3SMC mengambil peran aktif sebagai penghubung antara komunitas, proyek, serta individu yang ingin berkontribusi dalam membangun ekosistem berbasis komunitas yang solid dan aktif
                  </p>
                </div>
                
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800/50">
                    <h4 className="text-blue-400 font-semibold">800+ Member</h4>
                    <p className="text-gray-400 text-sm mt-1">Di Telegram</p>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800/50">
                    <h4 className="text-red-400 font-semibold">470+ Followers</h4>
                    <p className="text-gray-400 text-sm mt-1">Di Twitter</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Vision & Mission Holograms */}
        <motion.section 
          id="vision & mission"
          className="py-28 bg-black border-t border-gray-800/50 relative overflow-hidden"
          style={{ opacity, scale }}
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                  Visi dan Misi
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Tujuan dari Web3 Social Media Community
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CyberBorder>
                  <div className="relative bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 h-full backdrop-blur-sm">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Vision</h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                    Menjadi komunitas digital terdepan yang
                    memperkuat kolaborasi kreator dan builder di
                    ekosistem Web3 melalui sosial media. Yang bisa saling terhubung, berkoneksi sesama penggiat Web3.
                    </p>
                  </div>
                </CyberBorder>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CyberBorder>
                  <div className="relative bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 h-full backdrop-blur-sm">
                    <div className="flex items-center mb-6">
                      <div className="bg-red-500/20 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Mission</h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                    Menginspirasi dan edukasi pengguna sosial media
                    tentang Web3.
                    Menjadi jembatan antara pengguna
                    baru dan teknologi Web3. 
                    Mendukung proyek-proyek Web3 melalui event, campaign, dan kolaborasi strategis.
                    </p>
                  </div>
                </CyberBorder>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Quantum Portfolio Showcase */}
        <motion.section 
          id="portfolio showcase"
          className="py-28 bg-gradient-to-b from-black to-gray-900/30 border-t border-gray-800/50 relative overflow-hidden"
          style={{ opacity, y }}
        >
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-[length:300px_300px] opacity-5"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                  Member Portfolios
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Showcasing innovative projects from our talented W3SMC community members
              </p>
            </motion.div>
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 pointer-events-none -z-10">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px] opacity-10">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-red-500/10"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear'
                  }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <CyberBorder>
                    <div className="relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800/50 h-full flex flex-col transition-all duration-500 group-hover:bg-gray-900/70">
                      {/* Holographic Project Preview */}
                      <div className="relative overflow-hidden h-48">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/80 text-blue-300 border border-blue-500/30">
                            {item.category}
                          </span>
                        </div>
                        {/* Floating Tech Orb Effect */}
                        <motion.div 
                          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full filter blur-xl opacity-70"
                          animate={{
                            background: [
                              `radial-gradient(circle, ${COLORS.primary}55, transparent 70%)`,
                              `radial-gradient(circle, ${COLORS.secondary}55, transparent 70%)`,
                              `radial-gradient(circle, ${COLORS.primary}55, transparent 70%)`,
                            ],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: 'reverse'
                          }}
                        />
                      </div>
                      
                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        
                        <div className="flex items-center mt-4">
                          <div className="flex-shrink-0 mr-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center">
                              <span className="text-xs font-bold text-white">{item.author.initials}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-300">Created by</p>
                            <a 
                              href={item.author.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"
                            >
                              @{item.author.name}
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-6 pb-6">
                        <button className="w-full py-2.5 bg-gradient-to-r from-blue-600/80 to-red-600/80 hover:from-blue-700 hover:to-red-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/20">
                          <span>View Project</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </CyberBorder>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
                <button className="w-full max-w-xs mx-auto px-8 py-3.5 border border-gray-700/50 hover:border-gray-600/70 text-gray-300 hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center bg-black/50 hover:bg-black/70">
                  View All Portfolios
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Support W3SMC Section */}
        <motion.div 
          id='support-w3smc'
          className="py-20 md:py-28 bg-gradient-to-b from-black to-blue-900/30 border-t border-gray-800/50 relative"
          style={{ opacity, y }} 
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                  Support W3SMC
                </span>
              </h2>
              <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
                Jika kamu ingin mendukung W3SMC lebih lanjut, bisa melalui EVM Address dibawah.
              </p>
            </motion.div>
            
            <motion.div
              className="flex justify-center px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 md:p-6 w-full max-w-2xl">
                <div className="flex flex-col items-center">
                  <h3 className="text-base md:text-lg font-medium text-gray-300 mb-3 md:mb-4">
                    EVM Wallet Address
                  </h3>
                  
                  <div className="relative flex items-center justify-center bg-gray-900/70 px-3 py-2 md:px-4 md:py-3 rounded-md w-full border border-gray-700 min-h-[3rem]">
                    <div className="flex items-center justify-center w-full">
                      <span className="text-blue-400 font-mono text-xs sm:text-sm md:text-base text-center break-all px-2">
                        0x09D0411E4a52C7585F03EA921c5dD9cc6B81CcA3
                      </span>
                      
                      <button 
                        className="ml-2 shrink-0 text-gray-400 hover:text-blue-400 transition-colors p-1"
                        onClick={() => {
                          navigator.clipboard.writeText('0x09D0411E4a52C7585F03EA921c5dD9cc6B81CcA3');
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3 text-center">
                    Klik icon copy untuk manyalin alamat
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects W3SMC Showcase */}
        <motion.section 
          id="latest projects"
          className="py-28 bg-gradient-to-b from-black to-gray-900/30 border-gray-800/50 relative"
          style={{ opacity, y }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                  Project terbaru
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Berikut beberapa project yang bekerja sama dengan W3SMC
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <CyberBorder>
                    <div className="relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800/50 h-full flex flex-col">
                      <div className="relative overflow-hidden h-48">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute top-4 right-4 flex gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-black/50 text-blue-300 rounded-full border border-gray-700/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                      </div>
                      <div className="px-6 pb-6">
                        <button className="w-full py-2.5 bg-gradient-to-r from-blue-600/80 to-red-600/80 hover:from-blue-700 hover:to-red-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center">
                          <span>Access Protocol</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </CyberBorder>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
                <button className="w-full max-w-xs mx-auto px-8 py-3.5 border border-gray-700/50 hover:border-gray-600/70 text-gray-300 hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center bg-black/50">
                  Lihat Selengkapnya 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Cybernetic CTA */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-blue-900/10 via-black to-red-900/20 border-b border-gray-800/50 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                Partnership dan Kolaborasi?
              </span>
            </h2>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto"
              whileInView={{ y: [10, 0], opacity: [0.8, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CyberBorder>
                <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600/90 to-red-600/90 hover:from-blue-700 hover:to-red-700 text-white rounded-xl transition-all duration-300 text-lg font-semibold">
                  Hubungi kami disini
                </button>
              </CyberBorder>
              
              <CyberBorder>
                <button className="w-full px-8 py-4 bg-black/50 hover:bg-black/70 text-white rounded-xl border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 text-lg font-semibold">
                  Dokumentasi
                </button>
              </CyberBorder>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Cybernetic Footer */}
      <motion.footer 
        className="bg-black py-12 text-center border-t border-gray-800/50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-[length:200px_200px] opacity-5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <img
                src="/logo.png"
                alt="W3SMC Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                W3SMC
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              {['Developers', 'Latest Blog', 'W3SMC Community', 'Latest Space X'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center space-x-6">
              {['Twitter', 'Discord', 'GitHub', 'Telegram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800/30">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Web3 Social Media Community. All systems operational.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
