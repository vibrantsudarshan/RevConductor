import React from 'react';
import { Chart } from 'react-google-charts';
// import { Slider } from '@mui/material'
export const ScatterPlot = () => {
  const data = [["value", "Win", "Active", "Loss", "Pending"],
  ["50k", 11.5, 12.4, 14.1, 5.9],
  ["55k", 8.2, 4.7, 1.6, 7.8],
  ["60k", 2.1, 7.8, 3.2, 6.5],
  ["65k", 3.5, 9.1, 3.7, 2.2],
  ["70k", 10.2, 6.5, 2.9, 9.6],
  ["75k", 6.3, 3.1, 4.5, 4.8],
  ["80k", 4.8, 7.6, 2.1, 2.9],
  ["85k", 9.1, 2.2, 6.7, 1.4],
  ["90k", 3.9, 8.3, 3.1, 5.2],
  ["95k", 6.7, 2.5, 7.8, 3.3],
  ["100k", 4.2, 1.5, 5.1, 6.8],
  ["105k", 2.9, 4.6, 1.8, 4.7],
  ["110k", 7.1, 4.9, 4.2, 7.8],
  ["115k", 2.3, 6.5, 2.9, 5.3],
  ["120k", 3.6, 2.2, 6.8, 8.5],
  ["125k", 5.1, 8.2, 5.5, 2.6],
  ["130k", 6.9, 1.8, 4.7, 4.2],
  ["135k", 2.8, 5.1, 1.9, 3.5],
  ["140k", 5.2, 3.9, 8.5, 1.7],
  ["145k", 7.6, 1.7, 6.3, 3.1],
  ["150k", 8.1, 4.1, 3.1, 6.1],
  ];

  const options = {
    legend: { position: 'bottom' },
    colors: ['#4094F7', '#F98B24', '#D72700', '#202020'],
    ticks: ['50k', '75k', '100k', '125k', '150k'],
    // hAxis: {
    //   ticks: ['50k', '75k', '100k', '125k', '150k']
    // }
  };

  const marks = [
    {
      value: 0,
      label: '15d',
    },
    {
      value: 12.5,
      label: '30d',
    },
    {
      value: 25,
      label: '45d',
    },
    {
      value: 37.5,
      label: '1Q',
    },
    {
      value: 50,
      label: '2Q',
    },
    {
      value: 62.5,
      label: '3Q',
    },
    {
      value: 75,
      label: '1y',
    },
    {
      value: 87.5,
      label: '18m',
    },
    {
      value: 100,
      label: '2y',
    }
  ];

  return (
    <div className="basis-1/2">
      <div className='items-center justify-center'>
        <p className='text-base pl-9'>Scatter Plot</p>
        <input
          type='range'
          min={1}
          max={400}
          step={1}
          value={50}
          className='w-[80%] mt-5 ml-5'>
        </input>
      </div>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ScatterPlot;
