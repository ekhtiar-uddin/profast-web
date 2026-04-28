import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className=" relative z-50 py-[20px] mt-[32px] rounded-lg px-3 sm:px-4 md:px-[32px] customWidth bg-white flex justify-between items-center">
      <div>
        <div className="flex items-end ">
          <div className="">
            <img className="w-10 sm:w-auto" src={logo} alt="" />
          </div>

          <div className=" ">
            <h3
              className="text-[28px] sm:text-[32px] ml-[-16px] leading-[24px]   font-extrabold text-blackOne
         "
            >
              Profast
            </h3>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <ul className="addFlexItems gap-4 navList">
          <AnchorLink offset="50" href="#services">
            <li className="navIcon">Services</li>
          </AnchorLink>
          <AnchorLink offset="100" href="#coverage">
            <li className="navIcon">Coverage</li>
          </AnchorLink>
          <AnchorLink offset="50" href="#about">
            <li className="navIcon">About Us</li>
          </AnchorLink>
          <AnchorLink offset="50" href="#pricing">
            <li className="navIcon">Pricing</li>
          </AnchorLink>

          <AnchorLink offset="480" href="#beRider">
            <li className="navIcon hidden xl:block">Be a Rider</li>
          </AnchorLink>
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <Link to="/login">
          <button className="navSignIn  hover:bg-deepBlue hover:text-white">
            Sign In
          </button>
        </Link>
        <div className="flex items-center">
          <AnchorLink offset="-220" href="#beRider">
            <button className="navBeRider">Be a rider</button>
          </AnchorLink>

          <button className="bg-navArrow rounded-full w-[56px] h-[56px] flex items-center justify-center">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M9.33337 22.6668L22.6667 9.3335"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33337 9.3335H22.6667V22.6668"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu toggle */}
      <div className="lg:hidden flex items-center">
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="bg-navArrow rounded-full w-[48px] h-[48px] flex items-center justify-center"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7H20"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M4 12H20"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M4 17H20"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen ? (
        <div className="lg:hidden absolute z-50 left-0 right-0 top-full mt-3 bg-white rounded-lg customShadow p-4">
          <ul className="flex flex-col gap-2 navList">
            <AnchorLink offset="50" href="#services" onClick={closeMobileMenu}>
              <li className="navIcon w-full">Services</li>
            </AnchorLink>
            <AnchorLink offset="50" href="#coverage" onClick={closeMobileMenu}>
              <li className="navIcon w-full">Coverage</li>
            </AnchorLink>
            <AnchorLink offset="50" href="#about" onClick={closeMobileMenu}>
              <li className="navIcon w-full">About Us</li>
            </AnchorLink>
            <AnchorLink offset="50" href="#pricing" onClick={closeMobileMenu}>
              <li className="navIcon w-full">Pricing</li>
            </AnchorLink>
            <AnchorLink offset="-220" href="#beRider" onClick={closeMobileMenu}>
              <li className="navIcon w-full">Be a Rider</li>
            </AnchorLink>
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            <Link to="/login" onClick={closeMobileMenu}>
              <button className="navSignIn w-full hover:bg-deepBlue hover:text-white">
                Sign In
              </button>
            </Link>

            <AnchorLink offset="-220" href="#beRider" onClick={closeMobileMenu}>
              <button className="navBeRider w-full">Be a rider</button>
            </AnchorLink>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
