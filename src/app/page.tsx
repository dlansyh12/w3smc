import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Value from '../components/ourvalue/Value';
import About from '../components/about/About';
import OurPartnership from '../components/ourpartnership/OurPartnership';
import OurProjects from '../components/ourprojects/OurProjects';
import SupportW3SMC from '../components/supportw3smc/SupportW3SMC';
import Footer from '../components/footer/Footer';

export default function HomePage() {
  return (  
    <>
      <Navbar />
      <Hero />
      <Value />
      <About />
      <OurPartnership />
      <OurProjects />
      <SupportW3SMC />
      <Footer />
    </>
  );
}
