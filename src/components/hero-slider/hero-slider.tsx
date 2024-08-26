import { useState, useEffect } from 'react';
import './hero-slider.css';
import { Button } from '../ui/button';
import Header from '../header/header';

const HeroSlider = () => {
  const [items] = useState([
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
    {
      img: 'https://images.pexels.com/photos/6883810/pexels-photo-6883810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Book Your Ideal Meeting Room with Ease.',
      type: 'Interview Room',
      description:
        'Efficient, hassle-free room booking for all your meeting needs. A quiet, private space designed specifically for conducting interviews, with a minimalistic setup that ensures a professional atmosphere.',
    },
    {
      img: 'https://images.pexels.com/photos/3678057/pexels-photo-3678057.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Book Your Ideal Meeting Room with Ease.',
      type: 'Conference Room',
      description:
        'Efficient, hassle-free room booking for all your meeting needs. A large room equipped with a long table, chairs, and audiovisual equipment, ideal for formal meetings, presentations, and conferences.',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const moveSlider = (direction: string) => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (direction === 'next') {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    } else if (direction === 'prev') {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      );
    }
  };

  const moveToThumbnail = (index: number) => {
    if (isAnimating || index === activeIndex) return;

    setIsAnimating(true);
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match the animation duration

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div>
      <Header pageType="home" />

      <div className={`slider ${isAnimating ? 'animating' : ''}`}>
        <div className="list">
          <div className="item" key={activeIndex} style={{ zIndex: 1 }}>
            <img src={items[activeIndex].img} alt="" />
            <div className="content">
              <h1 className="title">{items[activeIndex].title}</h1>
              <h2 className="type">{items[activeIndex].type}</h2>
              <p className="description text-xl font-medium">
                {items[activeIndex].description}
              </p>
              <div className="buttons mt-6">
                <Button className=" bg-white text-black px-6 py-8 rounded-md text-2xl tracking-wider uppercase font-bold hover:bg-white/90">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          {items.map((item, index) => (
            <div
              className={`item ${
                index === activeIndex ? 'active-thumbnail' : ''
              }`}
              key={index}
              onClick={() => moveToThumbnail(index)}
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>

        <div className="nextPrevArrows">
          <button className="prev" onClick={() => moveSlider('prev')}>
            {' '}
            {'<'}{' '}
          </button>
          <button className="next" onClick={() => moveSlider('next')}>
            {' '}
            {'>'}{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
