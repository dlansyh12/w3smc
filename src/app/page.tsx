import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import OurPartnership from '../components/OurPartnership';
import OurProjects from '../components/OurProjects';
import SupportW3SMC from '../components/SupportW3SMC';
import Footer from '../components/Footer';

export default function HomePage() {
  return (  
    <>
      <Navbar />
      <Hero />
      <About />
      <OurPartnership />
      <OurProjects />
      <SupportW3SMC />
      <Footer />
    </>
  );
}
