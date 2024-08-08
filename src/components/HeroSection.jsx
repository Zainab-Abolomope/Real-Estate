import PropertyType from "./PropertyType";
import PropTypes from "prop-types";

const HeroSection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] box-border bg-[url('/public/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-33xl text-gray-white font-body-regular-400 mq825:pt-[78px] mq825:pb-[78px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-full mq450:gap-[15px] mq825:gap-[31px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-6">
          <h1 className="m-0 self-stretch relative text-inherit leading-[72px] font-semibold font-[inherit] mq450:text-12xl mq450:leading-[43px] mq825:text-23xl mq825:leading-[58px]">
            Find Your Dream Home
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-500 text-primary-50 mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[17px] max-w-full text-base text-primary-700 font-body-regular-500">
          <div className="flex flex-row items-start justify-start gap-2.5">
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start hover:bg-steelblue"
              autoFocus={true}
              disabled={false}
            >
              <div className="w-9 relative text-base leading-[24px] font-medium font-body-regular-500 text-gray-white text-center flex items-end justify-center min-w-[36px]">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start hover:bg-gainsboro-100">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-500 text-primary-400 text-center inline-block min-w-[33px]">
                Sale
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[1400px] rounded-lg bg-gray-white overflow-x-auto shrink-0 flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] gap-5 mq825:pl-[31px] mq825:pr-[31px] mq825:box-border mq1400:max-w-full">
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px] gap-4">
                <div className="relative leading-[24px] capitalize font-semibold inline-block min-w-[76px]">
                  Locations
                </div>
                <div className="flex flex-row items-center justify-start gap-1 text-left text-gray-400">
                  <div className="relative leading-[24px] inline-block min-w-[118px]">
                    Select your city
                  </div>
                  <img
                    className="h-1.5 w-2.5 relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <PropertyType
                propertyType="Property Type"
                text="Select property type"
              />
              <PropertyType
                propertyType="Rent Range"
                text="Select rent range"
              />
              <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-center justify-center hover:bg-steelblue">
                <div className="relative text-base leading-[24px] font-medium font-body-regular-500 text-gray-white text-center inline-block min-w-[54px]">
                  Search
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
