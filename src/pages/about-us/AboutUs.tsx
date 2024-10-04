import AboutHero from '@/components/about-hero/AboutHero';
import AboutUsBanner from '@/components/about-us-banner/AboutUsBanner';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import OurMission from '@/components/our-mission/OurMission';
import OurTeam from '@/components/our-team/OurTeam';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AboutUsPage() {
  const location = useLocation(); // React Router hook to access the current location

  useEffect(() => {
    // Check if the URL contains a hash and scroll to the respective section
    if (location.hash === '#our-mission' || location.hash === '#our-team') {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        // Scroll to the respective section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Header pageType="home" />
      <main>
        <AboutHero />

        <AboutUsBanner />

        <OurMission />
        <div id="our-team">
          <OurTeam />
        </div>
      </main>

      <Footer />
    </>
  );
}
