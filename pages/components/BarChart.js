import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

const BarChart = () => {
  const chartRef = useRef(null); 

  useEffect(() => {
    Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    const ctx = document.getElementById('myBarChart').getContext('2d');

   
    if (chartRef.current) {
      chartRef.current.destroy();
    }

  
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#333',
              font: {
                size: 14,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Sales Bar Chart</h3>
      <canvas id="myBarChart"></canvas>
    </div>
  );
};

export default BarChart;
