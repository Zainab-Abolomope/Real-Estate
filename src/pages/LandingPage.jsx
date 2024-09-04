
import HeroSection from "../components/HeroSection";
import PropertiesByAreaFeatureCar from "../components/PropertiesByAreaFeatureCar";
import LatestPropertiesOfRentCard from "../components/LatestPropertiesOfRentCard";
import LatestPropertiesOfRentCard1 from "../components/LatestPropertiesOfRentCard1";
import LatestPropertiesOfRentCard2 from "../components/LatestPropertiesOfRentCard2";


const LandingPage = () => {
  return (
    <div className="w-full relative bg-gray-white flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
     
      <HeroSection />
      <section className="self-stretch flex flex-col items-center justify-start py-[53px] px-[50px] box-border gap-[45px] max-w-full text-center text-21xl text-primary-800 font-body-regular-500 lg:pl-[25px] lg:pr-[25px] lg:box-border mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq825:gap-[22px] mq825:pt-[34px] mq825:pb-[34px] mq825:box-border">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-6">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-[inherit] mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Properties by Location
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400 mq450:text-base mq450:leading-[22px]">
          Thinking about a renovation or new build? Book a consultation with our team to explore how we can transform your space.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-gray-white">
          <div className="w-[1300px] flex flex-col items-center justify-start pt-0 px-0 pb-[30px] box-border gap-6 max-w-[1300px] mq1400:max-w-full">
            <div className="self-stretch grid flex-row items-start justify-center gap-[26px] max-w-full grid-cols-[repeat(3,_minmax(312px,_1fr))] lg:justify-center lg:grid-cols-[repeat(2,_minmax(312px,_541px))] mq825:grid-cols-[minmax(312px,_1fr)]">
              <div className="h-[241px] w-[416px] rounded-lg flex flex-row items-start justify-start pt-4 pb-[158px] pl-4 pr-[272px] box-border relative bg-[url('https://www.nikken.co.jp/en/projects/tg1is2000000508w-img/pj0320_01_tmb.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full">
                <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] inline-block min-w-[128px] mq450:text-lgi mq450:leading-[26px]">
                    New Center
                  </h3>
                  <div className="relative text-base leading-[24px] text-center inline-block min-w-[77px]">
                    30 Spaces
                  </div>
                </div>
              </div>
              <div className="h-[241px] w-[416px] rounded-lg flex flex-row items-start justify-start pt-4 pb-[158px] pl-4 pr-[272px] box-border relative bg-[url('https://www.nikken.co.jp/en/projects/tg1is20000004zna-img/pj0316_01_tmb.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full">
                <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] inline-block min-w-[128px] mq450:text-lgi mq450:leading-[26px]">
                    New Apartments
                  </h3>
                  <div className="relative text-base leading-[24px] text-center inline-block min-w-[77px]">
                    25 spaces
                  </div>
                </div>
              </div>
              <div className="h-[241px] w-[416px] rounded-lg flex flex-row items-start justify-start pt-4 pb-[158px] pl-4 pr-[272px] box-border relative bg-[url('https://www.nikken.co.jp/en/projects/tg1is20000004zh3-img/pj0315_01_tmb.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full">
                <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] inline-block min-w-[128px] mq450:text-lgi mq450:leading-[26px]">
                    Rose Apartments
                  </h3>
                  <div className="relative text-base leading-[24px] text-center inline-block min-w-[77px]">
                    12 Spaces
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-6 max-w-full mq1400:flex-wrap">
              <div className="h-[241px] flex-[0.8438] rounded-lg flex flex-row items-start justify-start pt-4 pb-[158px] pl-4 pr-[514px] box-border relative bg-[url('https://www.nikken.co.jp/en/projects/tg1is20000004yjs-img/pj0313_01_tmb.jpg')] bg-cover bg-no-repeat bg-[top] min-w-[415px] max-w-full mq825:min-w-full mq825:flex-1">
                <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] inline-block min-w-[108px] mq450:text-lgi mq450:leading-[26px]">
                    Dakota Apartments
                  </h3>
                  <div className="relative text-base leading-[24px] text-center inline-block min-w-[77px]">
                    20 Spaces
                  </div>
                </div>
              </div>
              <div className="h-[241px] flex-1 rounded-lg flex flex-row items-start justify-start pt-4 pb-[158px] pl-4 pr-[494px] box-border relative bg-[url('https://www.nikken.co.jp/en/projects/tg1is20000004iym-img/pj0281_01_tmb.jpg')] bg-cover bg-no-repeat bg-[top] min-w-[415px] max-w-full mq825:min-w-full">
                <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] inline-block min-w-[128px] mq450:text-lgi mq450:leading-[26px]">
                    Beauty Apartments
                  </h3>
                  <div className="relative text-base leading-[24px] text-center inline-block min-w-[77px]">
                    15 Spaces
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PropertiesByAreaFeatureCar />
      <LatestPropertiesOfRentCard />
      <LatestPropertiesOfRentCard1 />
      <LatestPropertiesOfRentCard2 />
      
    </div>
  );
};

export default LandingPage;
