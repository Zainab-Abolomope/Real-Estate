import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TopHeader = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-gray-white flex flex-row items-center justify-center py-[27px] px-20 box-border top-[0] z-[99] sticky max-w-full text-center text-5xl text-primary-500 font-body-regular-500 lg:pl-10 lg:pr-10 lg:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-between gap-5 max-w-full">
        <div className="flex flex-row items-center justify-center gap-2">
          <img
            className="h-11 w-11 relative object-cover"
            loading="lazy"
            alt=""
            src="/houseline@2x.png"
          />
          <div className="flex flex-col items-start justify-start">
            <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-[inherit] inline-block min-w-[53px] whitespace-nowrap">
              REIS
            </h2>
            <a className="[text-decoration:none] relative text-sm leading-[16px] font-medium text-[inherit] inline-block min-w-[68px] whitespace-nowrap">
              Real State
            </a>
          </div>
        </div>
        <div className="w-[810px] flex flex-row items-center justify-end gap-9 max-w-full lg:w-[60px] mq450:gap-[18px]">
          <nav className="m-0 flex-1 flex flex-row items-start justify-between max-w-full gap-5 text-center text-sm text-primary-900 font-body-regular-500 lg:hidden">
            <Link className="relative leading-[22px] inline-block min-w-[43px] [text-decoration:none] ">
              HOME
            </Link>
            <Link className="relative leading-[22px] inline-block min-w-[73px] whitespace-nowrap [text-decoration:none]">
              ABOUT US
            </Link>
           
            <Link className="relative leading-[22px] font-semibold inline-block min-w-[87px] [text-decoration:none]">
              PROPERTIES
            </Link>
            <Link className="relative leading-[22px] inline-block min-w-[63px] [text-decoration:none]">
              GALLERY
            </Link>
            
            <Link className="relative leading-[22px] inline-block min-w-[92px] whitespace-nowrap [text-decoration:none]">
              CONTACT US
            </Link>
           
          </nav>
          <div className="flex flex-row items-center justify-center">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/hamburgermenu@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

TopHeader.propTypes = {
  className: PropTypes.string,
};

export default TopHeader;
