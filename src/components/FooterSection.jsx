import PropTypes from "prop-types";

const FooterSection = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-start p-[50px] box-border max-w-full text-left text-5xl text-gray-black  bg-gray-300s font-body-regular-400 lg:pl-[25px] lg:pr-[25px] lg:box-border mq450:pt-8 mq450:pb-8 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap lg:justify-center">
        <div className="w-[312px] flex flex-col items-start justify-start gap-5 text-center text-primary-500 font-body-regular-500">
          <div className="flex flex-row items-center justify-center gap-2">
            <img
              className="h-11 w-11 relative"
              loading="lazy"
              alt=""
              src="/houseline-1.svg"
            />
            <div className="flex flex-col items-start justify-start">
              <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[53px] mq450:text-lgi mq450:leading-[19px]">
                NIKKEN
              </a>
              <a className="[text-decoration:none] relative text-sm leading-[16px] font-medium text-[inherit] inline-block min-w-[68px]">
                Real State
              </a>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-[inherit] text-gray-black inline-block min-w-[126px] mq450:text-lgi mq450:leading-[26px]">
              Contact Us
            </h3>
            <div className="relative leading-[24px]">Call : +123 400 123</div>
            <div className="self-stretch relative leading-[24px]">
            Ready to build the home you’ve always wanted? Let’s start the journey together. Our team will guide you every step of the way.


            </div>
            <div className="relative leading-[24px] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between gap-4">
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative"
                loading="lazy"
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/social-media-logo-1.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/social-media-logo-2.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/social-media-logo-3.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/social-media-logo-4.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-8">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] inline-block min-w-[101px] mq450:text-lgi mq450:leading-[26px]">
            Features
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-4 text-base text-gray-500">
            <div className="relative leading-[24px] inline-block min-w-[45px]">
              Home
            </div>
            <div className="relative leading-[24px] inline-block min-w-[112px]">
              Become a Host
            </div>
            <div className="relative leading-[24px] inline-block min-w-[53px]">
              Pricing
            </div>
            <div className="relative leading-[24px] inline-block min-w-[35px]">
              Blog
            </div>
            <div className="relative leading-[24px] inline-block min-w-[59px]">
              Contact
            </div>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-8">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] inline-block min-w-[107px] mq450:text-lgi mq450:leading-[26px]">
            Company
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-4 text-base text-gray-500">
            <div className="relative leading-[24px] inline-block min-w-[69px]">
              About Us
            </div>
            <div className="relative leading-[24px] inline-block min-w-[42px]">
              Press
            </div>
            <div className="relative leading-[24px] inline-block min-w-[59px]">
              Contact
            </div>
            <div className="relative leading-[24px] inline-block min-w-[59px]">
              Careers
            </div>
            <div className="relative leading-[24px] inline-block min-w-[35px]">
              Blog
            </div>
          </div>
        </div>
        <div className="w-[203px] flex flex-col items-start justify-start gap-8">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
            Team and policies
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-4 text-base text-gray-500">
            <div className="relative leading-[24px] inline-block min-w-[121px]">
              Terms of servies
            </div>
            <div className="relative leading-[24px] inline-block min-w-[104px]">
              Privacy Policy
            </div>
            <div className="relative leading-[24px] inline-block min-w-[63px]">
              Security
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterSection.propTypes = {
  className: PropTypes.string,
};

export default FooterSection;
