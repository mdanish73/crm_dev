'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false
      },
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        display: false
      },
      grid: {
        display: false
      }
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [14, 10, 5, 2, 20, 30, 45, 50, 73, 63, 50, 40],
      backgroundColor: 'rgba(255, 99, 132)',
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
