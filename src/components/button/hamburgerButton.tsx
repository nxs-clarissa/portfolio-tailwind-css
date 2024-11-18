import React, { useState, useEffect, useRef } from "react";
import List from "../List";

interface HamburgerButtonProps {
  onMenuToggle?: (isActive: boolean) => void; // Optional callback if you want to handle outside actions
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onMenuToggle }) => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Reference to the menu
  const hamburgerRef = useRef<HTMLButtonElement | null>(null); // Reference to the hamburger button

  // Toggle hamburger state and navigation visibility
  const toggleMenu = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    if (onMenuToggle) {
      onMenuToggle(newActiveState); // If there's a parent handler, call it
    }
  };

  // Handle clicks outside of the hamburger button or menu
  const handleOutsideClick = (e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(e.target as Node)
    ) {
      setIsActive(false); // Close the menu when clicking outside
    }
  };

  useEffect(() => {
    // Add event listener to detect outside clicks
    document.addEventListener("click", handleOutsideClick);

    // Cleanup listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      {/* Hamburger button */}
      <button
        id="hamburger"
        type="button"
        className={`block absolute right-4 top-1/2 transform -translate-y-1/2 lg:hidden ${
          isActive ? "hamburger-active" : ""
        }`}
        onClick={toggleMenu}
      >
        <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
        <span className="hamburger-line transition duration-300 ease-in-out"></span>
        <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
      </button>

      {/* Navigation menu */}
      <nav
        ref={menuRef}
        id="nav-menu"
        className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${
          isActive ? "" : "hidden"
        }`}
      >
        <ul className="block lg:flex">
          <List navbar="Home" href="#home" />
          <List navbar="About Me" href="#about" />
          <List navbar="Portfolio" href="#portfolio" />
          <List navbar="Clients" href="#clients" />
          <List navbar="Blog" href="#blog" />
          <List navbar="Contact" href="#contact" />

          {/* Add more menu items here */}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerButton;
