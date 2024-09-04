import React from 'react';
import BottomAbout from '../components/BottomAbout';

const Vision = () => {
  return (
    <>
      {/* Image Section */}
      <img
        src="https://www.nikken.co.jp/en/projects/tg1is200000052ti-img/pj0327_01_tmb.jpg"
        alt=""
        className="w-full h-auto"
      />

      {/* Content Section */}
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 text-center text-gray-700">
          {/* Brand Vision */}
          <div className="lg:col-span-1">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">BRAND VISION</h2>
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              We are experts who integrate the skills, knowledge, and experience needed to bring our clients' ideas to life.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              We are eager to listen to their voices, to share their vision, and together, to shape spaces, environments, cities, and society.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              We invent new possibilities by bringing together the right mix of experience, creativity, and passion to deliver that exceeds expectations.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              For 100 years, we have worked hand-in-hand with clients, designing solutions and environments that create truly meaningful experiences for all.
            </p>
          </div>

          {/* Brand Tagline */}
          <div className="lg:col-span-1">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">BRAND TAGLINE</h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">EXPERIENCE, INTEGRATED</p>
            <p className="text-sm sm:text-base lg:text-lg mt-2">
              Integrating accumulated proficiency to deliver rich experiences.
            </p>
          </div>

          {/* Motto */}
          <div className="lg:col-span-1">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">MOTTO</h2>
            <p className="text-sm sm:text-base lg:text-lg mb-4">more than creative</p>
            <p className="text-sm sm:text-base lg:text-lg mb-4">Immutability</p>
            <p className="text-sm sm:text-base lg:text-lg">Fair and neutral manner</p>
          </div>
        </div>
      </div>

      {/* Bottom About Section */}
      <BottomAbout />
    </>
  );
};

export default Vision;
