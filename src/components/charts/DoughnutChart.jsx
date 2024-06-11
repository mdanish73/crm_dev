'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  cutout: '80%', 
  radius: '70%',
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
};

export const data = {
  labels: ['Pink', 'Yellow', 'Blue', 'Green', 'Red'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(234 179 8)',
        'rgb(53, 162, 235)',
        'rgb(34 197 94)',
        'rgb(239 68 68)',
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(234 179 8)',
        'rgb(53, 162, 235)',
        'rgb(34 197 94)',
        'rgb(239 68 68)',
        ],
        borderWidth: 1
        },
        ],
        };
        
export default function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}