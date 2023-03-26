import React from 'react';
import { Chart } from 'react-google-charts';

export const ScatterPlot = () => {
  const data = [  ["value", "Win", "Active", "Loss", "Pending"],
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
    title: 'Scatter Plot',
    legend: {position: 'bottom'},
    colors: ['#4094F7', '#F98B24', '#D72700', '#202020'],
  };

  return (
    <div className="basis-1/2">
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
