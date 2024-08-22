import React from 'react';
import { Link } from 'react-router-dom';

const BottomProject = () => {
  const projects = [
    {
      "imgUrl": "https://www.nikken.co.jp/en/projects/tg1is20000004t3v-img/pj0291_01_tmb.jpg",
      "title": "Mitsui garden Hotel",
      "location": "Japan"
    },
    {
      "imgUrl": "https://www.nikken.co.jp/en/projects/tg1is20000004sxx-img/pj0290_01_tmb.jpg",
      "title": "Panasonic XC Kadoma",
      "location": "Kenya, Nairobi"
    },
    {
      "imgUrl": "https://www.nikken.co.jp/en/projects/tg1is20000004vhl-img/pj0301_01_tmb.jpg",
      "title": "LGT Wealth Management Trust",
      "location": "Japan, Tokyo"
    },
    {
      "imgUrl": "https://www.nikken.co.jp/en/projects/tg1is20000004srq-img/pj0289_01_tmb.jpg",
      "title": "Conrad Osaka",
      "location": "Osaka, Japan"
    },
    {
      "imgUrl": "https://www.nikken.co.jp/en/projects/tg1is20000004umv-img/pj0299_01_tmb.jpg",
      "title": "Garden Hotel",
      "location": "Japan, Kyoto"
    },
    {
      "imgUrl": "https://www.nikken.co.jp/en/projects/tg1is20000004uho-img/pj0298_01_tmb.jpg",
      "title": "Global Y&C Center",
      "location": "South Korea"
    },
    {
      "imgUrl": "https://www.nikken.co.jp/en/projects/tg1is20000004u6s-img/pj0296_01_tmb.jpg",
      "title": "Athlete Village Plaza",
      "location": "Japan, Tokyo"
    },
    {
      "imgUrl": "https://www.nikken.co.jp/en/projects/tg1is20000004u6s-img/pj0296_01_tmb.jpg",
      "title": "Interior International ORGATEC",
      "location": "Nigeria, Abuja"
    },
    {
      "imgUrl": "https://www.nikken.co.jp/en/projects/tg1is20000004tja-img/pj0294_01_tmb.jpg",
      "title": "Mitsui Garden",
      "location": "Tokyo"
    },
    {
      "imgUrl": "https://www.nikken.co.jp/en/projects/tg1is20000004tja-img/pj0294_01_tmb.jpg",
      "title": "Peppercorn Gourmet Kings",
      "location": "hey"
    }
  ];

  return (
    <div className="grid grid-cols-4  lg:grid-cols-2 gap-6  lg:px-10 m-[4em]">
      {projects.map((item, index) => (
        <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300 overflow-hidden">
          <Link to={`/single/${item.id}`}>
            <img className="w-full h-auto" src={item.imgUrl} alt={item.title} />
            <div className="flex flex-col p-4">
              <p className="font-bold">{item.title}</p>
              <p className="text-black mt-2">{item.location}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BottomProject;
