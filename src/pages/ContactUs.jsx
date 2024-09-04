import PropTypes from "prop-types";

const LatestPropertiesOfRentCard2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-5 box-border max-w-full text-center text-21xl text-primary-800 font-body-regular-500 mq450:pt-9 mq450:pb-9 mq450:box-border mq825:gap-[19px] mq825:pt-14 mq825:pb-14 mq825:box-border ${className}`}
    >
      <div className="w-[900px] flex flex-col items-center justify-start py-0 px-2.5 box-border gap-10 max-w-[900px] lg:max-w-full mq450:gap-5">
        <div className="w-[688px] flex flex-col items-center justify-start gap-6 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-[inherit] mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Contact us
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400 mq450:text-base mq450:leading-[22px]">
          Stay ahead of the curve with the latest trends and insights in architecture. Join our newsletter for exclusive content and updates.
          </div>
        </div>
        <div className="self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-gray-white flex flex-col items-center justify-start py-7 px-[30px] box-border gap-[17px] max-w-full text-left text-5xl text-darkslategray font-poppins mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-1.5">
            <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[29px]">
              Enquiry Form
            </h3>
            <div className="self-stretch relative text-lg leading-[30px] font-components-input-text text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <form className="m-0 self-stretch flex flex-col items-center justify-start gap-2.5 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center gap-2.5 max-w-full mq825:flex-wrap">
              <div className="flex-1 rounded border-gray1 border-[1px] border-solid box-border flex flex-col items-start justify-start py-3.5 px-3 min-w-[263px] max-w-full">
                <input
                  className="w-[78px] [border:none] [outline:none] font-components-input-text text-base bg-[transparent] h-6 relative tracking-[0.15px] leading-[24px] text-darkgray text-left flex items-center p-0"
                  placeholder="First name"
                  type="text"
                />
              </div>
              <div className="flex-1 rounded border-gray1 border-[1px] border-solid box-border flex flex-col items-start justify-center py-3.5 px-3 min-w-[263px] max-w-full">
                <input
                  className="w-[77px] [border:none] [outline:none] font-components-input-text text-base bg-[transparent] h-6 relative tracking-[0.15px] leading-[24px] text-darkgray text-left flex items-center p-0"
                  placeholder="Last name"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch rounded border-gray1 border-[1px] border-solid flex flex-col items-start justify-start py-3.5 px-3">
              <input
                className="w-[58px] [border:none] [outline:none] font-components-input-text text-base bg-[transparent] h-6 relative tracking-[0.15px] leading-[24px] text-darkgray text-left flex items-center p-0"
                placeholder="Email id"
                type="text"
              />
            </div>
            <div className="self-stretch h-[105px] rounded border-gray1 border-[1px] border-solid box-border flex flex-col items-start justify-start py-3 pl-3 pr-5">
              <div className="relative text-base tracking-[0.15px] leading-[24px] font-components-input-text text-darkgray text-left">
                Comments or questions
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[13.5px] px-[9px] bg-primary-500 w-[222px] rounded flex flex-col items-center justify-center box-border hover:bg-steelblue">
              <div className="self-stretch relative text-base font-components-input-text text-gray-white text-center">
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

LatestPropertiesOfRentCard2.propTypes = {
  className: PropTypes.string,
};

export default LatestPropertiesOfRentCard2;
