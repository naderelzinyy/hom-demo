import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Make sure to install react-transition-group

const TextSlider = () => {
  const texts = ["Glossy", "Hydrating", "Cruelty Free", "Tinted", "Vegan"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <TransitionGroup className="relative">
      <CSSTransition key={current} timeout={350} classNames="text-slider-transition">
        <div className="absolute flex items-center justify-center w-full bg-custom-blue">
          <p className="font-belgian text-8xl text-custom-blue text-center">{texts[current]}</p>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TextSlider;
