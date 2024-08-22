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
       <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-4">About Nikken Sekkei</h1>
      <p className="mb-6">
        At Nikken Sekkei, we take an integrated approach to our projects as a professional service firm. Across all in-house disciplines of architectural design: urban design, research, planning and consulting – our teams work collaboratively to deliver better solutions for clients.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
        {items.map((item) => (
          <div
            key={item.name}
            className="cursor-pointer hover:text-blue-600"
            onClick={() => handleClick(item)}
          >
            &gt; {item.name}
          </div>
        ))}
      </div>
    </div>
    <hr />

    <BottomAbout/>
   
  
    </section>
  );
};

export default AboutUsPage;
