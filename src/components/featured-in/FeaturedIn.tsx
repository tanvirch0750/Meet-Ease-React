import BusinessInsiderImg from '../../assets/business-insider.png';
import ForbesImg from '../../assets/forbes.png';
import TechCrunchImg from '../../assets/techcrunch.png';
import NewYorkTimesImg from '../../assets/the-new-york-times.png';
import UsaTodayImg from '../../assets/usa-today.png';

export default function FeaturedIn() {
  return (
    <section id="feature" className="pt-20 pb-28">
      <div className="container mx-auto">
        <h2 className="text-lg font-body text-emerald-600 font-bold uppercase tracking-wider f text-center mb-10">
          As featured in
        </h2>
        <div className="flex justify-around">
          <img
            src={BusinessInsiderImg}
            alt="Business Insider logo"
            className="h-8 filter brightness-0 opacity-70"
          />
          <img
            src={ForbesImg}
            alt="Forbes logo"
            className="h-4 md:h-8 filter brightness-0 opacity-60"
          />
          <img
            src={TechCrunchImg}
            alt="Tech crunch logo"
            className="h-4 md:h-8 filter brightness-0 opacity-50"
          />
          <img
            src={NewYorkTimesImg}
            alt="New york logo"
            className="h-4 md:h-8 hidden md:block filter brightness-0 opacity-60"
          />
          <img
            src={UsaTodayImg}
            alt="USA Today logo"
            className="h-4 md:h-8 hidden md:block filter brightness-0 opacity-50"
          />
        </div>
      </div>
    </section>
  );
}
