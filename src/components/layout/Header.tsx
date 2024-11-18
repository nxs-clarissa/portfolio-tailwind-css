import { useState } from "react";
import HamburgerButton from "../../components/button/hamburgerButton";

export default function Header() {
  // State untuk navbar dan tombol "scroll to top"
  const [isNavbarFixed] = useState(false);
//   const [isToTopVisible, setIsToTopVisible] = useState(false);

  return (
    <>
      {/* Header Start */}
      <header
        className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed ${
          isNavbarFixed ? "navbar-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                clarissavira
              </a>
            </div>
            <div className="flex items-center px-4">
              <HamburgerButton />
            </div>
          </div>
        </div>
      </header>
      {/* Header END */}
    </>
  );
}
