import React, { useState } from 'react';
import { ReactComponent as SnapchatIcon } from './assets/snapchat.svg';
import { ReactComponent as InstagramIcon } from './assets/skill-icons_instagram.svg';
import { ReactComponent as TiktokIcon } from './assets/logos_tiktok-icon.svg';
import { ReactComponent as FacebookIcon } from './assets/logos_facebook.svg';

const DropdownTextField = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center border-2 border-gray-300 outline-black rounded-md p-2"
        onClick={toggleDropdown}
      >
        <span className="mr-2">{selectedOption || <TiktokIcon/>}</span>
        <input
          type="text"
          placeholder="@username"
          className="outline-none flex-1"
        />
      </div>
      {dropdownOpen && (
        <ul className="absolute border-2 border-gray-300 rounded-md bg-white w-1/4 mt-1">
          {/* Map your options here */}
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => selectOption(<TiktokIcon/>)}
          >
            <TiktokIcon/>
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => selectOption(<SnapchatIcon/>)}
          >
            <SnapchatIcon/>
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => selectOption(<FacebookIcon/>)}
          >
            <FacebookIcon/>
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => selectOption(<InstagramIcon/>)}
          >
            <InstagramIcon/>
          </li>
          {/* Add more list items for other options */}
        </ul>
      )}
    </div>
  );
};

export default DropdownTextField;
