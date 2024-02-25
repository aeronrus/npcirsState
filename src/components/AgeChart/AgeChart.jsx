import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { dataHelper } from './dataHelper';

ChartJS.register(ArcElement, Tooltip, Legend);

function AgeChart(list) {
  const arrayBirthdayCount = dataHelper(list.list);
  const data = {
    labels: ['25-30 лет', '30-35 лет', '35-40 лет', '40-45 лет', '45-50 лет'],
    datasets: [
      {
        label: 'Кол-во заявителей в данном возрасте',
        data: arrayBirthdayCount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Возрастные категории заявителей ',
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default AgeChart;
