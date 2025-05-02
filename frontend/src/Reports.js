import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function Reports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://s94-backend.onrender.com/api/report-chart', {
      withCredentials: true
    })
    .then(res => setData(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <main role="main" style={{ padding: '20px' }}>
      <h1 id="fuel-chart-heading">Fuel Prices (Jan–May 2025)</h1>
      <section
        aria-labelledby="fuel-chart-heading"
        aria-describedby="fuel-chart-desc"
        role="region"
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[3, 5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#0055A4" />
          </BarChart>
        </ResponsiveContainer>
        <p id="fuel-chart-desc">
          This chart displays hypothetical U.S. fuel price trends from January to May 2025, ranging from $3.50 to $4.30 per gallon.
          Designed for screen readers: fuel prices rise steadily across months, indicating growing economic pressure for renewable alternatives.
          Source: Internal simulation based on clean energy pricing trends.
        </p>
      </section>
    </main>
  );
}

export default Reports;
