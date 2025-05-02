import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Recent Innovations in Generative AI</h1>
      
      <div className="content-section">
        <h2>Subject Overview</h2>
        <div className="summary-text">
          <p>
            The field of Generative AI has seen remarkable advancements in the past six months, 
            transforming how we interact with technology across multiple domains. Multimodal 
            models have emerged as a significant breakthrough, allowing AI systems to process and 
            generate content across different formats—text, images, audio, and video—simultaneously. 
            This has enabled more natural human-AI interactions and richer content creation capabilities.
          </p>
          <p>
            Open-source models have democratized access to powerful AI tools, fostering innovation 
            across industries and research institutions. These models have reduced barriers to entry, 
            allowing smaller organizations and independent developers to leverage cutting-edge AI 
            capabilities. At the same time, we've witnessed substantial progress in making generative 
            models more efficient and capable of running on consumer hardware, expanding their potential 
            applications.
          </p>
          <p>
            The healthcare sector has particularly benefited from generative AI innovations, with 
            new tools that can assist in medical image analysis, drug discovery, and personalized 
            treatment planning. Similarly, creative industries have embraced AI-powered tools for 
            content creation, from music composition to visual art generation. Looking ahead, 
            the integration of generative AI with robotics and edge computing presents promising 
            opportunities for further advancement in this rapidly evolving field.
          </p>
        </div>
        
        <div className="source-reference">
          <p>Source: <a href="https://ai.googleblog.com/2025/02/recent-advances-in-generative-ai.html" target="_blank" rel="noopener noreferrer">Google AI Blog: Recent Advances in Generative AI</a></p>
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