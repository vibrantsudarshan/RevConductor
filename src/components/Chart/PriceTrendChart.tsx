import React from 'react';
import Chart from 'react-google-charts';

const priceData = [
  ['Date', 'All', 'Quote', 'Similar'],
  [new Date(2022, 0), 10, 6, 8],
  [new Date(2022, 1), 8, 4, 5],
  [new Date(2022, 2), 9, 8, 7],
  [new Date(2022, 3), 12, 10, 11],
  [new Date(2022, 4), 14, 12, 13],
  [new Date(2022, 5), 11, 9, 10],
  [new Date(2022, 6), 10, 7, 9],
  [new Date(2022, 7), 8, 6, 7],
  [new Date(2022, 8), 9, 8, 7],
  [new Date(2022, 9), 10, 9, 8],
  [new Date(2022, 10), 12, 11, 10],
  [new Date(2022, 11), 14, 12, 13],
];


const options = {
  title: 'Price Trend',
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
    format: 'MMM yyyy',
    gridlines: { count: 5 },
  },
  vAxis: {
    viewWindow: {
      min: 0,
    },
    gridlines: { count: 5 },
  },
};

export const PriceTrendChart = () => {
  return (
    <div className='basis-1/2'>
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
