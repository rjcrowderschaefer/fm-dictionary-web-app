import React, { useState } from "react";

function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            Options
            <svg
              className="header-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="38"
              viewBox="0 0 34 38"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#838383"
                stroke-linecap="round"
                stroke-width="1.5"
              >
                <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
                <path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8" />
                <path d="M11 9h12" />
              </g>
            </svg>
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
          >
            Sans Serif
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
          >
            Serif
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
          >
            Mono
          </a>
        </div>
      </div>
    </>
  );
}

export default DropdownMenu;
