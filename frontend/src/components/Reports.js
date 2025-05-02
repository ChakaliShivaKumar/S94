import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Reports.css';

function Reports() {
  const [data, setData] = useState([
    { month: 'Jan', Battery_Storage: 150, Green_Hydrogen: 180, Floating_Wind: 200 },
    { month: 'Feb', Battery_Storage: 140, Green_Hydrogen: 170, Floating_Wind: 190 },
    { month: 'Mar', Battery_Storage: 130, Green_Hydrogen: 155, Floating_Wind: 180 },
    { month: 'Apr', Battery_Storage: 120, Green_Hydrogen: 145, Floating_Wind: 165 },
    { month: 'May', Battery_Storage: 110, Green_Hydrogen: 135, Floating_Wind: 150 }
  ]);

  return (
    <main role="main" style={{ padding: '20px' }}>
      <h1 id="cost-chart-heading">Clean Tech Cost Trends (2025)</h1>
      <section
        aria-labelledby="cost-chart-heading"
        aria-describedby="cost-chart-desc"
        role="region"
      >
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Battery_Storage" fill="#f57c00" />
            <Bar dataKey="Green_Hydrogen" fill="#43a047" />
            <Bar dataKey="Floating_Wind" fill="#6a1b9a" />
          </BarChart>
        </ResponsiveContainer>
        <p id="cost-chart-desc">
          This chart simulates cost trends for three emerging clean energy technologies—Battery Storage, Green Hydrogen, and Floating Wind Farms—
          from January to May 2025. All technologies show a downward cost trajectory due to innovation and investment, aligning with 2025 clean energy forecasts.
          Source:&nbsp;
          <a href="https://www.weforum.org/stories/2025/01/4-key-trends-to-watch-in-clean-energy-technology-in-2025/"
            target="_blank" rel="noopener noreferrer">
            World Economic Forum
          </a>.
        </p>
      </section>
    </main>
  );
}

export default Reports;
