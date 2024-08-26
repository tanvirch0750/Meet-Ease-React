import { useState, useEffect } from 'react';
import './hero-slider.css';
import { Button } from '../ui/button';

const HeroSlider = () => {
  const [items, setItems] = useState([
    {
      img: 'https://images.pexels.com/photos/1034008/pexels-photo-1034008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'MAGIC SLIDER',
      type: 'FLOWER',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.',
    },
    {
      img: 'https://i.ibb.co/jrRb11q/img2.jpg',
      title: 'MAGIC SLIDER',
      type: 'NATURE',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.',
    },
    {
      img: 'https://i.ibb.co/NSwVv8D/img3.jpg',
      title: 'MAGIC SLIDER',
      type: 'PLANT',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.',
    },
    {
      img: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
      title: 'MAGIC SLIDER',
      type: 'NATURE',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.',
    },
  ]);

  const [direction, setDirection] = useState<string | null>(null);

  const moveSlider = (direction: string) => {
    setDirection(direction);
    if (direction === 'next') {
      setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    } else if (direction === 'prev') {
      setItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, -1),
      ]);
    }
  };

  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => {
        setDirection(null);
      }, 500); // Match the animation duration

      return () => clearTimeout(timer);
    }
  }, [direction]);

  return (
    <div>
      <header>
        <nav>
          <a href="#" className="active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <div className={`slider ${direction}`}>
        <div className="list">
          {items.map((item, index) => (
            <div
              className="item"
              key={index}
              style={{ zIndex: index === 0 ? 1 : 0 }}
            >
              <img src={item.img} alt="" />
              <div className="content">
                <h1 className="title">{item.title}</h1>
                <h2 className="type">{item.type}</h2>
                <p className="description">{item.description}</p>
                <div className=" mt-12">
                  <Button className=" bg-emerald-600">Book Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {items.map((item, index) => (
            <div className="item" key={index}>
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
