import Card from "./Card";
import PropTypes from "prop-types";

const LatestPropertiesOfRentCard = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start py-[86px] px-0 box-border gap-[39px] max-w-full text-center text-21xl text-primary-800 font-body-regular-500 lg:pt-14 lg:pb-14 lg:box-border mq450:pt-9 mq450:pb-9 mq450:box-border mq825:gap-[19px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-10 max-w-full mq825:gap-5">
        <div className="w-[728px] flex flex-col items-center justify-start py-0 px-5 box-border gap-6 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-[inherit] mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Latest Properties of Rent
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400 mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-5 box-border gap-x-8 gap-y-[30.7px] max-w-full text-left text-mini-5 text-gray-700 mq825:gap-[15px]">
          <Card propertyImage="/property-image@2x.png" />
          <Card propertyImage="/property-image-1@2x.png" />
          <Card propertyImage="/property-image-2@2x.png" />
          <Card propertyImage="/property-image-3@2x.png" />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start whitespace-nowrap hover:bg-steelblue mq450:w-[calc(100%_-_40px)]">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-500 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </section>
  );
};

LatestPropertiesOfRentCard.propTypes = {
  className: PropTypes.string,
};

export default LatestPropertiesOfRentCard;
