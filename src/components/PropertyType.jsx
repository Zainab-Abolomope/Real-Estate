import PropTypes from "prop-types";

const PropertyType = ({ className = "", propertyType, text }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-4 text-left text-base text-primary-700 font-body-regular-500 ${className}`}
    >
      <div className="w-[150px] relative leading-[24px] capitalize font-semibold flex items-end">
        {propertyType}
      </div>
      <div className="flex flex-row items-center justify-start py-0 pl-0 pr-1.5 gap-[5px] text-gray-400">
        <div className="relative leading-[24px]">{text}</div>
        <img
          className="h-1.5 w-2.5 relative overflow-hidden shrink-0 object-cover"
          alt=""
          src="/vector@2x.png"
        />
      </div>
    </div>
  );
};

PropertyType.propTypes = {
  className: PropTypes.string,
  propertyType: PropTypes.string,
  text: PropTypes.string,
};

export default PropertyType;
