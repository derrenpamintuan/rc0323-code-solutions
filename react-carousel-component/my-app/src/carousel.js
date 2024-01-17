import { useState, useEffect } from "react";
import './carousel.css'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaRegCircle, FaCircle } from 'react-icons/fa';

export default function Carousel() {
  const slides = [
    { image: '/images/Pikachu.png', alt: 'pikachu'},
    { image: '/images/Bulbasaur.png', alt: 'bulbasaur'},
    { image: '/images/Charmander.png', alt: 'charmander'},
    { image: '/images/Squirtle.png', alt: 'squirtle'},
    { image: '/images/Jigglypuff.png', alt: 'jigglypuff'}
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlay = () => {
    if (currentIndex === slides.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {autoPlay()}, 3000)
    return () => clearInterval(interval);
  })

  function previous() {
    if (currentIndex === 0) {
      return setCurrentIndex(slides.length - 1);
    }
    return setCurrentIndex(currentIndex - 1);
  }

  function next() {
    if (currentIndex === slides.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  slides.forEach((slide, index) => {
    slide.tab = <FaRegCircle key={index} className='dot' onClick={() => {setCurrentIndex(index)}} />;
    if (currentIndex === index) {
      slide.tab = <FaCircle key={index} className='dot' />;
    }
  })

  return (
    <div className='container'>
      <div className='row'>
        <FiChevronLeft className='left' onClick={previous}/>
        <img src={slides[currentIndex].image} alt= {slides[currentIndex].alt} />
        <FiChevronRight className='right' onClick={next}/>
      </div>
      <div className="bottom-row">
        {slides.map((slide) => {
          return slide.tab;
        })}
      </div>
    </div>
  )
}
