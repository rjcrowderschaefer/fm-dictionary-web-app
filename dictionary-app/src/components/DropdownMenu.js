import React, { useState, useEffect, useRef } from "react";

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState("Sans Serif");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFontFamily, setSelectedFontFamily] = useState("sans-serif");

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);

    // setSelectedFontFamily(
    //   option === "Sans Serif"
    //   ? "sans-serif"
    //   : option === "Serif"
    //   ? "serif"
    //   : option === "Mono"
    //   ? "mono"
    //   : "sans-serif"
    // );

    const fontToSet = 
      option === "Sans Serif"
      ? "sans-serif"
      : option === "Serif"
      ? "serif"
      : option === "Mono"
      ? "mono"
      : "sans-serif";

    console.log("Selected Font:", fontToSet)

    setSelectedFontFamily(fontToSet)

  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);


    document.body.classList.remove("sans-serif", "serif", "mono");

    if (selectedOption === "Sans Serif") {
      document.body.classList.add("sans-serif");
    } else if (selectedOption === "Serif") {
      document.body.classList.add("serif");
    } else if (selectedOption === "Mono") {
      document.body.classList.add("mono");
    }


    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedOption]);

  return (
    <>
      <div className="font-dropdown">
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className={`inline-flex w-full justify-center gap-x-1.5 rounded-md`}
              style={{ fontFamily: `var(--selected-font-family)` }}
              id="menu-button"
              ref={menuRef}
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
              onClick={toggleMenu}
            >
              {selectedOption}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="dropdown-arrow"
                width="14"
                height="8"
                viewBox="0 0 14 8"
              >
                <path
                  fill="none"
                  stroke="#A445ED"
                  stroke-width="1.5"
                  d="m1 1 6 6 6-6"
                />
              </svg>
            </button>
          </div>
          <div
            className={`absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isMenuOpen ? "block" : "hidden"
            } dropdown-menu`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
            style={{ fontFamily: `var(--selected-font-family)` }}
          >
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={() => handleOptionClick("Sans Serif")}
            >
              <div className="sans-serif font-dropdown-selection">
                Sans Serif
              </div>
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
              onClick={() => handleOptionClick("Serif")}
            >
              <div className="serif font-dropdown-selection">Serif</div>
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
              onClick={() => handleOptionClick("Mono")}
            >
              <div className="mono font-dropdown-selection">Mono</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownMenu;
