import AboutHero from '@/components/about-hero/AboutHero';
import AboutUsBanner from '@/components/about-us-banner/AboutUsBanner';
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
