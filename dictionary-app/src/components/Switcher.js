import React, { useState, useEffect } from "react";

const Switcher = ( {onToggle} ) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    const newDarkModeValue = !isDarkMode;
    setIsDarkMode(newDarkModeValue);
    onToggle(newDarkModeValue);
    console.log(newDarkModeValue);
  };


  return (
    <>
    <div className="mode-switch-cont">
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleDarkModeToggle}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isDarkMode ? 'bg-primary dark-mode-checked' : 'light-mode-checked bg-dark'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isDarkMode ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
      </div>
    </>
  );
};

export default Switcher;
