import React, {useState} from 'react';
import { ReactComponent as WhatsAppIcon } from './assets/logos_whatsapp-icon.svg';
import { ReactComponent as SnapchatIcon } from './assets/snapchat.svg';
import { ReactComponent as InstagramIcon } from './assets/skill-icons_instagram.svg';
import { ReactComponent as TiktokIcon } from './assets/logos_tiktok-icon.svg';
import { ReactComponent as FacebookIcon } from './assets/logos_facebook.svg';
import Popup from './Popup';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);


  return (
    <div className="flex flex-col items-center justify-center bg-white -mt-24 sm:-mt-15 md:-mt-22 font-belgian">
      <p className="text-3xl font-thin text-custom-pink mb-6">Subscribe</p>
      <form className="flex flex-col items-center w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Email or phone number"
          className="form-input w-full mb-2 px-4 py-2 border rounded-full text-center outline-black"
          required
        />
        <span className="text-xs text-custom-pink mb-2">* Text field is required</span>
        <button type="submit" className="btn px-6 py-2
         bg-custom-pink text-white font-semibold
          rounded-full cursor-pointer hover:bg-pink-600 ">Submit</button>
      </form>
      
      <div className="w-full max-w-md mb-6 text-center">
        <h3 className="text-2xl text-custom-pink mb-2">Contact us</h3>
        {/* Replace with actual icons */}
        <div className="flex justify-center mb-4 border-2 rounded-lg py-2 border-slate-950 gap-2 hover:bg-gray-200 cursor-pointer">
          <WhatsAppIcon className="fill-current text-black w-6 h-6" />
          <span className="text-xl">Whats App</span>
        </div>
        
        <h3 className="text-2xl text-custom-pink mb-2">Follow us</h3>
        <div className="flex flex-col justify-center">
          
        <div className="flex justify-center mb-4 border-2 rounded-lg py-2 border-slate-950 gap-2 hover:bg-gray-200 cursor-pointer">
          <SnapchatIcon className="fill-current text-black w-6 h-6" />
          <span className="text-xl">Snapchat</span>
        </div>


        <div className="flex justify-center mb-4 border-2 rounded-lg py-2 border-slate-950 gap-2 hover:bg-gray-200 cursor-pointer">
          <InstagramIcon className="fill-current text-black w-6 h-6" />
          <span className="text-xl">Instagram</span>
        </div>


        <div className="flex justify-center mb-4 border-2  rounded-lg py-2 border-slate-950 gap-2 hover:bg-gray-200 cursor-pointer">
          <TiktokIcon className="fill-current text-black w-6 h-6" />
          <span className="text-xl">Tiktok</span>
        </div>

        <div className="flex justify-center mb-4 border-2 rounded-lg py-2 border-slate-950 gap-2 hover:bg-gray-200 cursor-pointer">
          <FacebookIcon className="fill-current text-black w-6 h-6" />
          <span className="text-xl">Facebook</span>
        </div>

        </div>
      </div>
      {showPopup && <Popup onClose={handleClosePopup}/>}
      <div className="text-center text-xl mb-6">
        <p>Interested in collaboration?</p>
        <button onClick={handleOpenPopup} className="font-bold underline text-custom-pink text-xl">Join our influencer list!</button>
      </div>

      <footer className="text-xs text-center text-gray-500">
        Copyright © 2023 House Of Mistic.
      </footer>
    </div>
  );
};

export default HomePage;
