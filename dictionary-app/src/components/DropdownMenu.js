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
      <div className="font-dropdown">
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
            <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="#A445ED" stroke-width="1.5" d="m1 1 6 6 6-6"/></svg>
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
            <div className="sans-serif">Sans Serif</div>
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
            onClick={() => handleOptionClick("Serif")}
          >
            <div className="serif">Serif</div>
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
            onClick={() => handleOptionClick("Mono")}
          >
            <div className="mono">Mono</div>
          </a>
        </div>
      </div>
      </div>
    </>
  );
}

export default DropdownMenu;
