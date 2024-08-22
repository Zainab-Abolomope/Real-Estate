import React, { useState } from 'react';

const TopProject= () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    // console.log(Selected Type: ${type});
    // Add your filtering logic here
  };

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    // console.log(Selected Region: ${region});
    // Add your filtering logic here
  };

  return (
    <div className="p-4 md:p-8 mx-[4em]">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h1 className="text-2xl md:text-4xl font-bold">PROJECTS</h1>
        <button
          className="py-2 px-4 bg-gray-200 rounded-full"
          onClick={toggleFilter}
        >
          Filter
        </button>
      </div>

      {filterVisible && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-6">
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Type</h2>
            <ul className="space-y-1 md:space-y-2">
              {[
                'Urban Design / Master Plan',
                'Office',
                'Hospitality',
                'Healthcare',
                'Cultural/Sports',
                'Aviation/Transportation',
                'Landscape',
                'Interior Design',
                'Mixed Use / TOD',
                'Commercial / Retail',
                'Residential',
                'Education',
                'R&D / Industrial / Logistics',
                'Sustainability',
                'Tall Buildings'
              ].map((type) => (
                <li
                  key={type}
                  className={`text-gray-600 cursor-pointer ${
                    selectedType === type ? 'font-bold' : ''
                  }`}
                  onClick={() => handleTypeClick(type)}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Region</h2>
            <ul className="space-y-1 md:space-y-2">
              {['Japan', 'Overseas'].map((region) => (
                <li
                  key={region}
                  className={`text-gray-600 cursor-pointer ${
                    selectedRegion === region ? 'font-bold' : ''
                  }`}
                  onClick={() => handleRegionClick(region)}
                >
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopProject;