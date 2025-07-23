import Hero from '../components/Hero';
import Services from '../components/ServicesPreview';
import HomeAbout from '../components/HomeAbout';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <HomeAbout />
      <CTA />
    </div>
  );
};

export default Home;