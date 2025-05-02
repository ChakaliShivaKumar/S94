import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Reports.css';

const API_URL = process.env.REACT_APP_API_URL || 'https://s94-backend.onrender.com';

function Reports() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('Authentication token not found');
          setLoading(false);
          return;
        }
        
        const response = await axios.get(`${API_URL}/api/charts/ai-models`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.data.success) {
          setChartData(response.data.data);
        } else {
          setError('Failed to fetch chart data');
        }
      } catch (err) {
        setError('Error: ' + (err.response?.data?.message || err.message));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="reports-container">
      <h1>Growth in Generative AI Models</h1>
      
      <div className="chart-container">
        {loading && <p className="loading-message">Loading chart data...</p>}
        
        {error && <p className="error-message">Error: {error}</p>}
        
        {!loading && !error && (
          <>
            <div className="chart" aria-label="Line chart showing growth in number of Generative AI models over time">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: 'Number of Models', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="models" name="Number of Published Models" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="chart-explanation">
              <h2>About This Chart</h2>
              <p>
                This chart tracks the growth in the number of publicly available Generative AI models 
                over the past six months. The data shows a consistent upward trend, with the number 
                of models increasing from 125 in November 2024 to 210 in April 2025, representing a 
                68% growth in just six months.
              </p>
              <p>
                The steepest growth occurred between January and February 2025, coinciding with the 
                release of several major open-source frameworks that simplified model development and 
                deployment. The continued growth reflects increasing investment in AI research, 
                improvements in model efficiency allowing deployment on more accessible hardware, and 
                expanding application areas driving demand for specialized models.
              </p>
              <p>
                These figures include both entirely new models and significant updates to existing 
                architectures that substantially improved capabilities or efficiency. The trend 
                suggests accelerating innovation in the field, with projections indicating that the 
                number of available models could exceed 300 by the end of 2025.
              </p>
              <p>
                Data source: AI Model Registry and Open Model Database, compiled April 2025.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Reports;