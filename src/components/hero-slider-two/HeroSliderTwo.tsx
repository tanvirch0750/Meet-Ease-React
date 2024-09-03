import React, { useRef } from 'react';
import './HeroSliderTwo.css'; // Import your CSS file here

import PrimaryButton from '../ui/primary-button';

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
    img: 'https://img.freepik.com/premium-photo/sleek-conference-room-with-sophisticated-technology_1169880-118800.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
    title: 'Book Your Ideal Meeting Room with Ease.',
    type: 'Presentation Room',
    description:
      'Efficient, hassle-free room booking for all your meeting needs. A room equipped with a stage, projector, and seating arrangement, perfect for delivering presentations, pitches, or talks',
  },
  {
    img: 'https://img.freepik.com/free-photo/concentrated-young-woman-drinking-coffee-working_171337-16851.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
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
      <div className="carousel">
        {/* List Items */}
        <div className="list" ref={sliderRef}>
          {sliderItems?.map((sliderItem) => (
            <div className="item">
              <img src={sliderItem.img} alt="Slider 1" />
              <div className="content">
                <h1 className="title text-4xl md:text-6xl font-light max-w-[700px] md:w-[850px] md:max-w-[750px] mt-4">
                  {sliderItem.title}
                </h1>
                <h2 className="topic text-2xl md:text-4xl text-emerald-500 my-8">
                  {sliderItem.type}
                </h2>
                <p className="des text-base text-white font-medium max-w-[500px]">
                  {sliderItem.description}
                </p>
                <div className="buttons">
                  {/* <Button className=" bg-white text-black px-6 py-8 rounded-md text-2xl tracking-wider uppercase font-medium hover:bg-white/90">
                    Book Now
                  </Button> */}
                  <PrimaryButton text="Book Now" />
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
                <div className="title text-white rounded-lg font-bold text-sm">
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
