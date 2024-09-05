import React from 'react';
import BottomAbout from '../components/BottomAbout';
import { Link } from 'react-router-dom';

const Vision = () => {
  return (
    <>
      {/* Image Section */}
      <img
        src="https://www.nikken.co.jp/en/projects/tg1is200000052ti-img/pj0327_01_tmb.jpg"
        alt=""
        className="w-full h-auto"
      />
<div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-64 md:h-96 flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}>
        <h1 className="text-4xl md:text-6xl text-white font-bold">About Us</h1>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600">
          We believe in designing spaces that inspire, elevate, and endure. With over 10 years of experience in the architecture industry, we have established ourselves as leaders in creating innovative, functional, and sustainable designs that reflect our clients' aspirations and the surrounding environment.

Our Mission
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img src="/first.jpg" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">John Doe</h3>
              <p className="text-gray-500">CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img src="/second.jpg" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">Jane Smith</h3>
              <p className="text-gray-500">Head Manufacturer</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img src="/third.jpg" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">Bob Johnson</h3>
              <p className="text-gray-500">Architect Designer</p>
            </div>
            {/* Team Member 4 */}
            <div className="text-center">
              <img src="/fourth.jpg" alt="Team Member 4" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">Alice Davis</h3>
              <p className="text-gray-500">Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Want to Work with Us?</h2>
          <p className="mt-4">Partner with our expert architects to create spaces that inspire. Whether you're planning a new build or a renovation, our team is ready to turn your ideas into reality.

!</p>
          <Link to="/contact" className="mt-6 inline-block bg-white text-indigo-600 px-6 py-3 font-semibold rounded hover:bg-gray-100 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>

     
    </>
  );
};

export default Vision;
