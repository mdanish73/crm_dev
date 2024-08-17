'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [0, 10, 5, 2, 20, 30, 45, 50, 73, 63, 50, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132)',
      tension: 0.4
    },
    {
      label: 'Dataset 2',
      data: [0, 10, 5, 2, 20, 30, 45, 50, 73, 63, 50, 40].reverse(),
      borderColor: '#2196F3',
      backgroundColor: '#2196F3',
      tension: 0.4
    }
  ],
};

export  default function LineChart() {
  return <Line options={options} data={data} />;
}
