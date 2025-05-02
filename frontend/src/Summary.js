import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function Summary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://s94-backend.onrender.com/api/summary-chart', {
        withCredentials: true
      })
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main role="main" style={{ padding: '20px' }}>
      <h1 id="ev-chart-heading">EV Adoption Trend (2025)</h1>
      <section
        aria-labelledby="ev-chart-heading"
        aria-describedby="ev-chart-desc"
        role="region"
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="EV_Adoption" stroke="#006400" />
          </LineChart>
        </ResponsiveContainer>
        <p id="ev-chart-desc">
          The chart displays the percentage of EV adoption from January to May 2025.
          Data is simulated based on market trends. For screen reader users, this line chart shows a steady rise,
          with values starting from 40% in January and reaching 80% by May.
          Source: <a href="https://www.sciencealert.com/toyotas-solid-state-battery-breakthrough-could-be-a-gamechanger" target="_blank" rel="noopener noreferrer">ScienceAlert</a>.
        </p>
      </section>
    </main>
  );
}

export default Summary;
