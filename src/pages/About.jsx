// components/AboutUsPage.jsx

import React from "react";

import BottomAbout from "../components/BottomAbout";





const AboutUsPage = () => {
    const items = [
        { name: "CEO Message" },
        { name: "Corporate Data" },
        { name: "Corporate Structure" },
        { name: "Group" },
        { name: "People" },
        { name: "Board Members" },
        { name: "Publication" },
        { name: "Projects History" },
        { name: "Corporate History" },
        { name: "Social Responsibility" },
        { name: "PYNT" }
      ];

    
  return (
    <section>
        
       <img src="https://www.nikken.co.jp/en/about/p4iusj0000000tgf-img/img_about.jpg " alt="" className="w-[100%] h-auto" />
       <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
        <div className="mx-auto max-w-md text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Products</h2>

            <p className="mt-4 text-gray-500">
            Partner with our expert architects to create spaces that inspire. Whether you're planning a new build or a renovation, our team is ready to turn your ideas into reality.


            </p>
          </header>

          <a
            href="/gallery"
            className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="group block">
              <img
                src="https://www.nikken.co.jp/en/projects/tg1is20000004srq-img/pj0289_01_tmb.jpg"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover: group-hover:underline-offset-4 "
                >
                  Conrad Osaka Homes
                </h3>

                <p className="mt-1 text-sm text-gray-700">$150</p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block">
              <img
                src="https://www.nikken.co.jp/en/projects/tg1is20000004umv-img/pj0299_01_tmb.jpg"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:group-hover:underline-offset-4"
                >
                  New Garden Tower
                </h3>

                <p className="mt-1 text-sm text-gray-700">$150</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    <BottomAbout/>
   
  
    </section>
  );
};

export default AboutUsPage;
