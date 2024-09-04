import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopHeader = ({ className = "" }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <header
      className={`self-stretch bg-gray-white flex flex-row items-center justify-center py-[27px] px-20 box-border top-[0] z-[99] sticky max-w-full text-center text-5xl text-primary-500 font-body-regular-500 lg:pl-10 lg:pr-10 lg:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-between gap-5 max-w-full">
        {/* Logo Section */}
        <div className="flex flex-row items-center justify-center gap-2">
          <img
            className="h-11 w-11 relative object-cover"
            loading="lazy"
            alt="Logo"
            src="/houseline@2x.png"
          />

          
          <div className="flex flex-col items-start justify-start">
            <h2 className="m-0 relative text-inherit leading-[24px] font-semibold inline-block min-w-[53px] whitespace-nowrap cursor-pointer hover:text-3xl transition-transform">
              NIKKEN
            </h2>
            <span className="relative text-sm leading-[16px] font-medium text-[inherit] inline-block min-w-[68px] whitespace-nowrap cursor-pointer hover:text-3xl transition-transform">
              Real Estate
            </span>
          </div>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="w-[810px] flex flex-row items-center justify-end gap-9 max-w-full lg:w-[60px] mq450:gap-[18px] lg:hidden text-[14px]">
          <Link
            to="/"
            className="relative leading-[22px] inline-block min-w-[43px] [text-decoration:none]"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="relative leading-[22px] inline-block min-w-[73px] whitespace-nowrap [text-decoration:none]"
          >
            ABOUT US
          </Link>
          <Link
            to="/properties"
            className="relative leading-[22px]  inline-block min-w-[87px] [text-decoration:none]"
          >
            PROPERTIES
          </Link>
          <Link
            to="/gallery"
            className="relative leading-[22px] inline-block min-w-[63px] [text-decoration:none]"
          >
            GALLERY
          </Link>
          <Link
            to="/contact"
            className="relative leading-[22px] inline-block min-w-[92px] whitespace-nowrap [text-decoration:none]"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:flex flex-row items-center justify-center cursor-pointer hidden">
          <img
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover lg:block"
            loading="lazy"
            alt="Menu"
            src="/hamburgermenu@2x.png"
          />
        </div>

        {/* Mobile Navigation Menu */}
        {isNavOpen && (
          <div className="absolute top-[100%] left-[0] w-[810px] bg-white rounded-md shadow-md py-6 px-6 z-50 flex flex-col items-start justify-start gap-5 text-center text-sm text-primary-900 font-body-regular-500 ">
            <Link
              to="/"
              className="relative leading-[22px] inline-block min-w-[43px] [text-decoration:none]"
              onClick={handleNavLinkClick}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="relative leading-[22px] inline-block min-w-[73px] whitespace-nowrap [text-decoration:none]"
              onClick={handleNavLinkClick}
            >
              ABOUT US
            </Link>
            <Link
              to="/properties"
              className="relative leading-[22px] font-semibold inline-block min-w-[87px] [text-decoration:none]"
              onClick={handleNavLinkClick}
            >
              PROPERTIES
            </Link>
            <Link
              to="/gallery"
              className="relative leading-[22px] inline-block min-w-[63px] [text-decoration:none]"
              onClick={handleNavLinkClick}
            >
              GALLERY
            </Link>
            <Link
              to="/contact"
              className="relative leading-[22px] inline-block min-w-[92px] whitespace-nowrap [text-decoration:none]"
              onClick={handleNavLinkClick}
            >
              CONTACT US
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

TopHeader.propTypes = {
  className: PropTypes.string,
};

export default TopHeader;
