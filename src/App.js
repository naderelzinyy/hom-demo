import './App.css';
import HomePage from './HomePage';
import TextSlider from './TextSlider';
import Logo from './assets/logo.png';

function App() {
  const isLoading = false;
  return (
    
    <div className="flex flex-col items-center justify-top w-full  bg-white -mt-24 pb-20">
      <img src={Logo} alt="" className="max-w-2xs md:max-w-sm md:max-h-sm lg:max-w-md"/>
      {isLoading ? <TextSlider className="p-6"></TextSlider> : <HomePage></HomePage>}
    </div>
  );
}

export default App;
