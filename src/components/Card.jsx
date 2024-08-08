import PropTypes from "prop-types";

const Card = ({ className = "", propertyImage }) => {
  return (
    <div
      className={`flex-1 rounded-3xs bg-gray-white border-whitesmoke border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[13px] px-3 pb-[33px] gap-[23px] min-w-[380px] max-w-[400px] text-left text-mini-5 text-gray-700 font-body-regular-500 hover:bg-gainsboro-200 hover:cursor-pointer mq450:pt-5 mq450:pb-[21px] mq450:box-border mq450:max-w-full mq450:min-w-full ${className}`}
    >
      <img
        className="self-stretch h-[200px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={propertyImage}
      />
      <div className="self-stretch flex flex-row items-start justify-start p-2.5 box-border max-w-full">
        <div className="flex-1 relative leading-[21px] font-medium inline-block max-w-full">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
        <div className="relative leading-[19px] font-semibold inline-block min-w-[69px] whitespace-nowrap">
          $ 590,693
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-[190px] gap-[17px] text-2xs-8 text-gray-500 mq450:flex-wrap mq450:pr-5 mq450:box-border">
        <div className="flex flex-row items-center justify-start gap-[4.4px]">
          <img
            className="h-[17.4px] w-[17.4px] relative min-h-[17px]"
            alt=""
            src="/car.svg"
          />
          <div className="relative leading-[17px] font-medium inline-block min-w-[8px]">
            4
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.4px]">
          <img
            className="h-[17.4px] w-[17.4px] relative min-h-[17px]"
            alt=""
            src="/bathtub.svg"
          />
          <div className="relative leading-[17px] font-medium inline-block min-w-[8px]">
            4
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.4px]">
          <img
            className="h-[17.4px] w-[17.4px] relative min-h-[17px]"
            alt=""
            src="/arrowsout.svg"
          />
          <div className="relative leading-[17px] font-medium inline-block min-w-[58px]">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-5 text-center text-xs-6 mq450:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[4.8px]">
          <img
            className="h-[27.6px] w-[27.6px] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className="relative leading-[17.42px] font-medium inline-block min-w-[75px]">
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.7px]">
          <div className="w-[20.3px] rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start py-[2.9px] px-0.5 box-border">
            <img
              className="h-[14.5px] w-[14.5px] relative"
              alt=""
              src="/sharenetwork.svg"
            />
          </div>
          <div className="w-[20.3px] rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start py-[2.9px] px-0.5 box-border">
            <img
              className="h-[14.5px] w-[14.5px] relative"
              alt=""
              src="/heart.svg"
            />
          </div>
          <div className="w-[20.3px] rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start py-[2.9px] px-0.5 box-border">
            <img
              className="h-[14.5px] w-[14.5px] relative"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  propertyImage: PropTypes.string,
};

export default Card;
