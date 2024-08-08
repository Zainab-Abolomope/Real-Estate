import SellYourHome from "./SellYourHome";
import PropTypes from "prop-types";

const PropertiesByAreaFeatureCar = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-regular-500 lg:gap-[53px] mq825:gap-[27px] mq825:pt-[45px] mq825:pb-[45px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%] mq825:gap-[27px] mq825:pt-[49px] mq825:box-border">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-6 max-w-[95%]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-[inherit] mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Properties by Area
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400 mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-between py-0 px-[207px] gap-5 text-left text-base text-gray-700 lg:pl-[103px] lg:pr-[103px] lg:box-border mq825:pl-[51px] mq825:pr-[51px] mq825:box-border">
          <SellYourHome icon="/icon.svg" sellYourHome="Sell your home" />
          <SellYourHome
            icon="/icon-1.svg"
            sellYourHome="Rent your home"
            propWidth="184px"
            propDisplay="flex"
            propTextDecoration="none"
          />
          <SellYourHome
            icon="/icon-2.svg"
            sellYourHome="Buy a home"
            propWidth="unset"
            propDisplay="unset"
            propTextDecoration="none"
          />
          <SellYourHome
            icon="/icon-3.svg"
            sellYourHome="Free marketing"
            propWidth="176px"
            propDisplay="flex"
            propTextDecoration="none"
          />
        </div>
      </div>
    </section>
  );
};

PropertiesByAreaFeatureCar.propTypes = {
  className: PropTypes.string,
};

export default PropertiesByAreaFeatureCar;
