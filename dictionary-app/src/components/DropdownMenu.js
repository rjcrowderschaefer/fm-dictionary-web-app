import React, { useState } from "react";

function DropdownMenu() {
    const [selectedOption, setSelectedOption] = useState("Sans Serif");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md"
            id="menu-button"
            aria-expanded={isMenuOpen}
            aria-aria-haspopup="true"
            onClick={toggleMenu}
          >
            {selectedOption}
           
          </button>
        </div>
        <div
          className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isMenuOpen ? "block" : "hidden"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
            onClick={() => handleOptionClick("Sans Serif")}
          >
            Sans Serif
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
            onClick={() => handleOptionClick("Serif")}
          >
            Serif
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
            onClick={() => handleOptionClick("Mono")}
          >
            Mono
          </a>
        </div>
      </div>
    </>
  );
}

export default DropdownMenu;
