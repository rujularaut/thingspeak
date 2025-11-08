import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = ({ labels, tempData, humData, fullDates }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: tempData,
        borderColor: '#b36a1cd7', // light orange
        backgroundColor: '#ac6111fb',
        tension: 0.3,
        pointRadius: 3
      },
      {
        label: 'Humidity (%)',
        data: humData,
        borderColor: '#124b90d7', // light blue
        backgroundColor: 'rgba(11, 62, 79, 0.83)',
        tension: 0.3,
        pointRadius: 3
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // makes chart fill container
    plugins: {
      legend: {
        labels: {
          color: '#4a351fd7' // legend text color for dark background
        }
      },
      tooltip: {
        callbacks: {
          title: function (context) {
            const index = context[0].dataIndex;
            return fullDates[index] || context[0].label;
          },
          label: function (context) {
            return `${context.dataset.label}: ${context.formattedValue}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: { display: true, text: 'Time', color: '#4a351fd7' },
        ticks: { color: '#4a351fd7' },
        grid: { color: '#4a351fd7' }
      },
      y: {
        title: { display: true, text: 'Value', color: '#4a351fd7' },
        ticks: { color: '#4a351fd7' },
        grid: { color: '#4a351fd7' }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
