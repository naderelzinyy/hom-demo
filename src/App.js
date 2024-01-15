import './App.css';
import HomePage from './HomePage';
import TextSlider from './TextSlider';
import Logo from './assets/logo.png';
import React, { useState, useEffect } from 'react';


function App() {
  const [showTextSlider, setShowTextSlider] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTextSlider(false); // Hide TextSlider after 500ms
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-top w-full bg-white -mt-24 pb-20">
      <img src={Logo} alt="" className="max-w-2xs md:max-w-sm md:max-h-sm lg:max-w-md"/>

      {/* TextSlider with transition */}
      <div className={`transition-opacity duration-500
${showTextSlider ? 'opacity-100' : 'opacity-0'}`}>
<TextSlider className="p-6" />
</div>

  {/* HomePage - initially hidden */}
  { !showTextSlider && <HomePage /> }
</div>
);
}


export default App;
