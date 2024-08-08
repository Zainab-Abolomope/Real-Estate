import { useMemo } from "react";
import PropTypes from "prop-types";

const SellYourHome = ({
  className = "",
  icon,
  sellYourHome,
  propWidth,
  propDisplay,
  propTextDecoration,
}) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  const readMoreStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className={`w-[312px] shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] rounded bg-gray-white flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-regular-500 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-6">
        <img
          className="w-[78px] h-[78px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={icon}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          <h3
            className="m-0 relative text-5xl leading-[32px] font-semibold font-[inherit] text-center mq450:text-lgi mq450:leading-[26px]"
            style={sellYourHomeStyle}
          >
            {sellYourHome}
          </h3>
          <div className="self-stretch relative leading-[24px] text-gray-400">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div
            className="relative leading-[24px] text-primary-500 inline-block min-w-[82px]"
            style={readMoreStyle}
          >
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

SellYourHome.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  sellYourHome: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default SellYourHome;
