import AboutHero from '@/components/about-hero/AboutHero';
import AboutUs from '@/components/about-us/AboutUs';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import OurMission from '@/components/our-mission/OurMission';
import OurTeam from '@/components/our-team/OurTeam';

export default function AboutUsPage() {
  return (
    <>
      <Header pageType="home" />
      <main>
        <AboutHero />

        <AboutUs />

        <OurMission />
        <OurTeam />
      </main>

      <Footer />
    </>
  );
}
