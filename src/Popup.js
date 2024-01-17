import React from 'react'
import DropdownTextField from './TextfieldDropdown';

const Popup = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow  sm:w-1/2 md:w-1/3 space-y-4">
          <h2 className="text-2xl text-center font-bold text-custom-pink">Join the Mistic squad!</h2>
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Email or phone number"
              className="form-input w-full mb-1 px-4 py-2 border rounded-full outline-black text-center"
              required
            />
            <span className="text-xs text-red-500">* Text field is required</span>
          </div>
          <div className="flex items-center justify-center">
            <DropdownTextField></DropdownTextField>
            {/* Dropdown icon could be a separate toggleable component */}
           
      </div>
      <div className="flex flex-row gap-4">
        <button className="w-full bg-custom-pink text-white py-2 rounded-full hover:bg-pink-600 font-bold">
            Send
        </button>
        <button className="w-full bg-custom-pink text-white py-2 rounded-full hover:bg-pink-600 font-bold"
        onClick={onClose}>
            close
        </button>

      </div>

    </div>
  </div>
  );
  };  
export default Popup