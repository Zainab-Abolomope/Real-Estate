import { useMemo } from "react";
import PropTypes from "prop-types";

const Card1 = ({ className = "", propBackgroundImage }) => {
  const card1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className={`flex-1 rounded-md flex flex-col items-center justify-end p-6 box-border bg-[url('/public/card-11@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px] min-h-[426px] text-left text-base text-gray-white font-body-regular-500 ${className}`}
      style={card1Style}
    >
      <div className="flex flex-row items-end justify-center py-0 px-[43px] gap-8 mq450:flex-wrap mq450:gap-4 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex flex-row items-start justify-end gap-2">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/mappin.svg"
          />
          <div className="relative leading-[24px] font-medium inline-block min-w-[91px]">
            Washington
          </div>
        </div>
        <div className="flex flex-row items-start justify-end gap-2">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/arrowsout-4.svg"
          />
          <div className="relative leading-[24px] font-medium inline-block min-w-[49px]">
            12000
          </div>
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default Card1;
