import React from 'react';
import Chart from 'react-google-charts';
import { useState } from 'react';

const priceData = [
  ['String', 'All', 'Quote', 'Similar'],
  ["Q1", 1, 15.5, 8],
  ["Q2", 8, 4, 5],
  ["Q3", 9, 8, 7],
  ["Q4", 12, 10, 11]
];

const options = {
  curveType: 'function',
  legend: {
    position: "bottom",
    textStyle: {
      color: "gray",
      fontSize: 14,
    },
    text: "Customers:",
  },
  hAxis: {
    format: String,
    gridlines: { count: 5 },
  },
  vAxes: {
    0: {
      viewWindow: {
        min: 0,
      },
      gridlines: { count: 5 },
    },
    1: {
      title: 'Values',
      titleTextStyle: {
        color: '#666',
        fontSize: 14,
      },
      ticks: [100, 200, 300, 400, 500],
      gridlines: {
        color: 'transparent',
      },
    },
  },
  annotations: {
    style: 'line',
    stem: {
      color: 'transparent',
      length: '20',
    },
    textStyle: {
      fontSize: 12,
      bold: true,
      color: '#000',
    },
    vertical: true,
    highContrast: true,
    alwaysOutside: true,
  },
};

export const PriceTrendChart = () => {
  const [activeTabIndex, setactiveTabIndex] = useState(2);
  return (
    <div className='basis-1/2'>
      <div>
        <p className='text-base ml-6'>Price Trend</p>
        <div className='flex flex-row justify-center items-center'>
          <div className="flex space-x-5 border-b">
            <button
              key='1'
              className={`py-2 px-2 whitespace-nowrap border-b-2 text-sm transition-colors duration-300 ${1 === activeTabIndex
                ? "border-[#4094F7]"
                : "border-transparent hover:border-[#4094F7]"
                }`}
              // Change the active tab on click.
              onClick={() => setactiveTabIndex(1)}>
              Default
            </button>
          </div>
          <div className="flex space-x-3 border-b">
            <button
              key='1'
              className={` py-2 px-2 whitespace-nowrap border-b-2 text-sm transition-colors duration-300 ${2 === activeTabIndex
                ? "border-[#4094F7]"
                : "border-transparent hover:border-[#4094F7]"
                }`}
              onClick={() => setactiveTabIndex(2)}>
              Region 6 months
            </button>
          </div>
          <div className="flex space-x-3 border-b border-b-">
            <button
              key='1'
              className={` py-2 px-2 whitespace-nowrap border-b-2 text-sm transition-colors duration-300 ${3 === activeTabIndex
                ? "border-[#4094F7]"
                : "border-transparent hover:border-[#4094F7]"
                }`}
              onClick={() => setactiveTabIndex(3)}>
              Global Group
            </button>
          </div>
          <div className="flex space-x-3 border-b border-b-">
            <button
              key='4'
              className={` py-2 px-2 whitespace-nowrap border-b-2 text-sm transition-colors duration-300 ${4 === activeTabIndex
                ? "border-[#4094F7]"
                : "border-transparent hover:border-[#4094F7]"
                }`}
              onClick={() => setactiveTabIndex(4)}>
              Type 3 mths
            </button>
          </div>
        </div>
      </div>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={priceData}
        options={options}
      />
    </div>
  );
};

export default PriceTrendChart;
