import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

const Summary = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchSolarData = async () => {
      try {
        const res = await axios.get('/api/solar-data', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = res.data;
        setChartData({
          labels: data.map(item => item.date),
          datasets: [{
            label: 'Solar Radiation (kWh/m²/day)',
            data: data.map(item => item.radiation),
            fill: false,
            borderColor: '#4caf50'
          }]
        });
      } catch (err) {
        console.error('Error fetching chart data', err);
      }
    };

    fetchSolarData();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Solar Radiation Trends (April 2024)</h2>
      {chartData ? (
        <Line data={chartData} />
      ) : (
        <p>Loading chart...</p>
      )}
      <p style={{ marginTop: '15px' }}>
        This chart shows the average daily solar radiation for the city of Charlotte, NC, between April 1st and April 10th, 2024.
        Data is sourced directly from the NASA POWER API, which provides publicly accessible global meteorological datasets.
      </p>
      <p>
        🔗 Source:{" "}
        <a
          href="https://power.larc.nasa.gov"
          target="_blank"
          rel="noopener noreferrer"
        >
          NASA POWER API
        </a>
      </p>
    </div>
  );
};

export default Summary;
