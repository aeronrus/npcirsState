import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { dataHelper } from './dataHelper';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Кол-во поданных заявлений по месяцам',
    },
  },
};

function ApplicationDateChart({ data }) {
  const applicationMonthCount = dataHelper(data);
  const values = {
    datasets: [
      {
        fill: true,
        label: 'Поданные заявки, шт.',
        data: applicationMonthCount,
        backgroundColor: 'orange',
      },
    ],
  };
  return <Line options={options} data={values} />;
}
export default ApplicationDateChart;
