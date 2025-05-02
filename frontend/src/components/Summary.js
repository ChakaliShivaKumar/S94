import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Summary.css';

const API_URL = process.env.REACT_APP_API_URL || 'https://s94-backend.onrender.com';

function Summary() {
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
        
        const response = await axios.get(`${API_URL}/api/charts/industry-adoption`, {
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
    <div className="summary-container">
      <h1>Industry Adoption of Generative AI</h1>
      
      <div className="chart-container">
        {loading && <p className="loading-message">Loading chart data...</p>}
        
        {error && <p className="error-message">Error: {error}</p>}
        
        {!loading && !error && (
          <>
            <div className="chart" aria-label="Bar chart showing industry adoption percentages of Generative AI">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="industry" />
                  <YAxis label={{ value: 'Adoption Rate (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="adoption" name="Adoption Rate (%)" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="chart-explanation">
              <h2>About This Chart</h2>
              <p>
                This chart illustrates the adoption rate of Generative AI technologies across 
                different industries as of April 2025. The entertainment sector shows the highest 
                adoption rate at 77%, leveraging generative models for content creation, 
                personalization, and virtual experiences. The finance sector follows closely at 72%, 
                utilizing AI for fraud detection, personalized financial advice, and risk assessment.
              </p>
              <p>
                Healthcare has reached a 68% adoption rate, with applications in medical imaging, 
                drug discovery, and personalized treatment plans. Education shows a moderate 63% 
                adoption, using generative AI for personalized learning experiences and content 
                creation. Retail has achieved 55% adoption, primarily in customer service, 
                recommendation systems, and inventory management. Manufacturing currently has the 
                lowest adoption rate at 48%, but is rapidly implementing generative AI for design 
                optimization, predictive maintenance, and quality control.
              </p>
              <p>
                Data source: Industry survey conducted by AI Research Institute, March-April 2025.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Summary;