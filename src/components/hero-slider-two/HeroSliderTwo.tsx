import React, { useRef } from 'react';
import './HeroSliderTwo.css'; // Import your CSS file here
import Header from '../header/header';
import { Button } from '../ui/button';

const sliderItems = [
  {
    img: 'https://images.pexels.com/photos/3678057/pexels-photo-3678057.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Book Your Ideal Meeting Room with Ease.',
    type: 'Conference Room',
    description:
      'Efficient, hassle-free room booking for all your meeting needs. A large room equipped with a long table, chairs, and audiovisual equipment, ideal for formal meetings, presentations, and conferences.',
  },
  {
    img: 'https://images.pexels.com/photos/6883810/pexels-photo-6883810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Book Your Ideal Meeting Room with Ease.',
    type: 'Interview Room',
    description:
      'Efficient, hassle-free room booking for all your meeting needs. A quiet, private space designed specifically for conducting interviews, with a minimalistic setup that ensures a professional atmosphere.',
  },
  {
    img: 'https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Book Your Ideal Meeting Room with Ease.',
    type: 'Presentation Room',
    description:
      'Efficient, hassle-free room booking for all your meeting needs. A room equipped with a stage, projector, and seating arrangement, perfect for delivering presentations, pitches, or talks',
  },
  {
    img: 'https://images.pexels.com/photos/8423355/pexels-photo-8423355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Book Your Ideal Meeting Room with Ease.',
    type: 'Workshop Room',
    description:
      'Efficient, hassle-free room booking for all your meeting needs. A creative and versatile space, often with modular furniture, whiteboards, and other tools, suitable for hands-on workshops and collaborative projects.',
  },
];

const Carousel: React.FC = () => {
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbnailBorderRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoNextTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  //   useEffect(() => {
  //     if (thumbnailBorderRef.current) {
  //       const thumbnailItemsDom =
  //         thumbnailBorderRef.current.querySelectorAll<HTMLDivElement>('.item');
  //       thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
  //     }

  //     autoNextTimeoutRef.current = setTimeout(() => {
  //       showSlider('next');
  //     }, timeAutoNext);

  //     return () => {
  //       if (timeoutRef.current) clearTimeout(timeoutRef.current);
  //       if (autoNextTimeoutRef.current) clearTimeout(autoNextTimeoutRef.current);
  //     };
  //   }, []);

  const showSlider = (type: 'next' | 'prev') => {
    if (sliderRef.current && thumbnailBorderRef.current) {
      const sliderItemsDom =
        sliderRef.current.querySelectorAll<HTMLDivElement>('.item');
      const thumbnailItemsDom =
        thumbnailBorderRef.current.querySelectorAll<HTMLDivElement>('.item');

      if (type === 'next') {
        sliderRef.current.appendChild(sliderItemsDom[0]);
        thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
        sliderRef.current.parentElement?.classList.add('next');
      } else {
        sliderRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderRef.current.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        sliderRef.current.parentElement?.classList.add('prev');
      }

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        sliderRef.current?.parentElement?.classList.remove('next');
        sliderRef.current?.parentElement?.classList.remove('prev');
      }, timeRunning);

      if (autoNextTimeoutRef.current) clearTimeout(autoNextTimeoutRef.current);
      autoNextTimeoutRef.current = setTimeout(() => {
        showSlider('next');
      }, timeAutoNext);
    }
  };

  return (
    <>
      <Header pageType="home" />
      <div className="carousel">
        {/* List Items */}
        <div className="list" ref={sliderRef}>
          {sliderItems?.map((sliderItem) => (
            <div className="item">
              <img src={sliderItem.img} alt="Slider 1" />
              <div className="content">
                <span className="author">MEET EASE</span>
                <h1 className="title text-7xl font-light w-[850px] mt-4">
                  {sliderItem.title}
                </h1>
                <h2 className="topic text-6xl text-emerald-500 my-8">
                  {sliderItem.type}
                </h2>
                <p className="des text-xl font-medium">
                  {sliderItem.description}
                </p>
                <div className="buttons">
                  <Button className=" bg-white text-black px-6 py-8 rounded-md text-2xl tracking-wider uppercase font-medium hover:bg-white/90">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnails */}
        <div className="thumbnail" ref={thumbnailBorderRef}>
          {sliderItems.map((sliderItem) => (
            <div className="item">
              <img src={sliderItem?.img} alt="Thumbnail 1" />
              <div className="content">
                <div className="title text-white rounded-lg font-bold">
                  {sliderItem.type}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="arrows">
          <button id="prev" onClick={() => showSlider('prev')}>
            &lt;
          </button>
          <button id="next" onClick={() => showSlider('next')}>
            &gt;
          </button>
        </div>

        {/* Time Running */}
        <div className="time"></div>
      </div>
    </>
  );
};

export default Carousel;
