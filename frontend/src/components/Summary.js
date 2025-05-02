import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function Summary() {
  // Simulated data reflecting relative innovation growth in 2025
  const [data, setData] = useState([
    { month: 'Jan', Battery_Storage: 20, Green_Hydrogen: 10, AI_Grids: 15, Floating_Wind: 5 },
    { month: 'Feb', Battery_Storage: 30, Green_Hydrogen: 15, AI_Grids: 20, Floating_Wind: 10 },
    { month: 'Mar', Battery_Storage: 45, Green_Hydrogen: 25, AI_Grids: 35, Floating_Wind: 18 },
    { month: 'Apr', Battery_Storage: 60, Green_Hydrogen: 40, AI_Grids: 50, Floating_Wind: 28 },
    { month: 'May', Battery_Storage: 75, Green_Hydrogen: 55, AI_Grids: 65, Floating_Wind: 40 }
  ]);

  return (
    <main role="main" style={{ padding: '20px' }}>
      <h1 id="clean-energy-chart-heading">Clean Energy Innovation Trends (2025)</h1>
      <section
        aria-labelledby="clean-energy-chart-heading"
        aria-describedby="clean-energy-chart-desc"
        role="region"
      >
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Battery_Storage" stroke="#f57c00" />
            <Line type="monotone" dataKey="Green_Hydrogen" stroke="#43a047" />
            <Line type="monotone" dataKey="AI_Grids" stroke="#1e88e5" />
            <Line type="monotone" dataKey="Floating_Wind" stroke="#6a1b9a" />
          </LineChart>
        </ResponsiveContainer>
        <p id="clean-energy-chart-desc">
          This chart represents the simulated innovation growth across four key clean energy sectors from Jan–May 2025:
          <strong> Battery Storage</strong>, <strong>Green Hydrogen</strong>, <strong>AI for Smart Grids</strong>, and <strong>Floating Wind Farms</strong>.
          These values reflect increasing global investment and adoption rates based on industry forecasts.
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

export default Summary;
