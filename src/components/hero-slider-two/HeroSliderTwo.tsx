import React, { useRef } from 'react';
import './HeroSliderTwo.css'; // Import your CSS file here

import PrimaryButton from '../ui/primary-button';
import { Link } from 'react-router-dom';

const sliderItems = [
  {
    img: 'https://images.pexels.com/photos/3678057/pexels-photo-3678057.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Book Your Ideal Conference Hall with Ease.',
    type: 'Conference Hall',
    description:
      'Conference Hall Alpha is ideal for large corporate events and conferences. The stage is equipped with lighting and a professional PA system for presentations. Wireless microphones and a high-definition display ensure that your message reaches every participant, while a dedicated event coordinator is on hand to assist with logistics.',
    link: '/rooms/66deff8dcfcfed7f0f12dd7a',
  },
  {
    img: 'https://images.pexels.com/photos/6883810/pexels-photo-6883810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'CEO Corner is designed with productivity in mind',
    type: 'CEO Corner',
    description:
      'The leather chairs and soundproofing offer both comfort and privacy for sensitive discussions. The room is equipped with a high-definition video conferencing system and a mini-bar for refreshments during extended meetings, making it perfect for corporate executives.',
    link: '/rooms/66def683cfcfed7f0f12dd34',
  },
  {
    img: 'https://img.freepik.com/premium-photo/sleek-conference-room-with-sophisticated-technology_1169880-118800.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
    title: 'The ideal choice for high-level executive meetings',
    type: 'Boardroom Alpha',
    description:
      'Offering a spacious and professional setting. Equipped with state-of-the-art facilities, including an HD projector and conference phone, it ensures seamless presentations and discussions.',
    link: '/rooms/66def57fcfcfed7f0f12dd2c',
  },
  {
    img: 'https://img.freepik.com/free-photo/concentrated-young-woman-drinking-coffee-working_171337-16851.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
    title: 'A cozy space where ideas come to life.',
    type: 'Visionary Lounge',
    description:
      'The soundproof walls ensure privacy, while the refreshment bar keeps the creativity flowing. High-speed internet and ergonomic seating ensure that teams can focus on brainstorming and planning effectively.',
    link: '/rooms/66defda2cfcfed7f0f12dd66',
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
            <div className="item" key={sliderItem?.type}>
              <img src={sliderItem.img} alt="Slider 1" />
              <div className="content">
                <h1 className="title text-4xl md:text-6xl font-light max-w-[700px] md:w-[850px] md:max-w-[770px] mt-4">
                  {sliderItem.title}
                </h1>
                <h2 className="topic text-2xl md:text-4xl text-emerald-500 my-8">
                  {sliderItem.type}
                </h2>
                <p className="des text-base text-white font-medium max-w-[500px]">
                  {sliderItem.description}
                </p>
                <div className="buttons">
                  <Link to={sliderItem?.link!}>
                    <PrimaryButton text="Book Now" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnails */}
        <div className="thumbnail" ref={thumbnailBorderRef}>
          {sliderItems.map((sliderItem) => (
            <div className="item" key={sliderItem?.type}>
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
