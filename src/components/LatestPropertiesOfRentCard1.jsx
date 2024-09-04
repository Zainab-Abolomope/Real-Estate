import Card1 from "./Card1";
import PropTypes from "prop-types";

const LatestPropertiesOfRentCard1 = ({ className = "" }) => {
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
          Get inspired by our portfolio of diverse architectural designs. Discover how we can bring your vision to life.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-5 box-border gap-x-10 gap-y-[38.7px] max-w-full text-left text-base text-gray-white mq825:gap-[19px]">
          <Card1 />
          <Card1 propBackgroundImage="url('https://www.nikken.co.jp/en/projects/tg1is200000051o8-img/pj0325_01_tmb.jpg')" />
          <Card1 propBackgroundImage="url('https://www.nikken.co.jp/en/projects/tg1is200000053q7-img/pj0329_01_tmb.jpg')" />
          <Card1 propBackgroundImage="url('https://www.nikken.co.jp/en/projects/tg1is200000051a5-img/pj0324_01_tmb.jpg')" />
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

LatestPropertiesOfRentCard1.propTypes = {
  className: PropTypes.string,
};

export default LatestPropertiesOfRentCard1;
