import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Recent innovations in Clean Energy</h1>
      
      <div className="content-section">
        <h2>Subject Overview</h2>
        <div className="summary-text">
        <p>
          In 2025, clean energy innovation is advancing rapidly across four key areas. 
          First, energy storage is becoming more efficient and cost-effective, enabling better integration of intermittent sources like solar and wind into the grid. This helps stabilize energy supply and reduces dependency on fossil fuels. 
          Second, green hydrogen is emerging as a practical fuel alternative for carbon-intensive sectors such as shipping, aviation, and heavy industry. With scalable production methods improving, green hydrogen is becoming more commercially viable. 
          Third, policy and international cooperation are accelerating clean energy deployment, with countries aligning strategies to meet climate targets and support sustainable infrastructure. 
          Fourth, digital technologies such as artificial intelligence, the Internet of Things (IoT), and blockchain are playing a critical role in optimizing energy efficiency, monitoring emissions, and enabling smart grids. 
          These advancements are not only reducing carbon footprints but also opening up new markets and investment opportunities. Collectively, these trends signify that clean energy is becoming central to global economic growth and environmental resilience.
        </p>
          
          
        </div>
        
        <div className="source-reference">
          <p>Source: <a href="https://www.weforum.org/stories/2025/01/4-key-trends-to-watch-in-clean-energy-technology-in-2025/" target="_blank" rel="noopener noreferrer">Google AI Blog: Recent Advances in Generative AI</a></p>
        </div>
      </div>
      
      <div className="content-section">
        <h2>Technical Details</h2>
        <div className="tech-details">
          <h3>Project Architecture</h3>
          <p>
            This Single Page Application (SPA) is built using React for the frontend with JWT 
            authentication for secure access. The backend is powered by Node.js/Express and uses 
            MongoDB for data storage. The application features a decoupled architecture where the 
            frontend and backend communicate via REST API calls.
          </p>
          
          <h3>Key Technologies</h3>
          <ul>
            <li><strong>Frontend:</strong> React, React Router, Recharts for data visualization</li>
            <li><strong>Backend:</strong> Node.js, Express</li>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
            <li><strong>Deployment:</strong> Render for hosting both frontend and backend</li>
          </ul>
          
          <h3>Accessibility Features</h3>
          <p>
            The application incorporates WCAG accessibility principles including semantic HTML, 
            appropriate ARIA attributes, keyboard navigation support, and sufficient color contrast 
            to ensure usability for all users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;