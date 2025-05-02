import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
    <div>
        <h2>Summary: Recent Innovation in Clean Energy</h2>
        <p>
        Title: Breakthrough in Solid-State Battery Technology Promises Safer, High-Density EV Power

        Over the past six months, researchers at QuantumScape and Toyota have made significant advancements in solid-state battery technology—a key innovation poised to transform electric vehicles (EVs). Unlike traditional lithium-ion batteries that use liquid electrolytes (which are flammable and limit energy density), solid-state batteries use solid electrolytes. This change dramatically improves safety, charge time, and energy density. Toyota announced it would commercialize these batteries as early as 2027, claiming a range of 745 miles and charging in under 10 minutes. This innovation also improves battery lifespan and eliminates risks of thermal runaway. The development could significantly reduce the carbon footprint of EVs by making them more appealing and efficient, potentially accelerating clean energy adoption worldwide.

        Source:
        🔗 https://www.sciencealert.com/toyotas-solid-state-battery-breakthrough-could-be-a-gamechanger
        </p>
    </div>
    <div>
        <h2>
        Technical Overview
        </h2>
        <p>
        This project is built using the MERN stack — MongoDB for database, Express and Node.js for the backend (running on port 3000), and React for the frontend (served via NGINX on port 80). Charts on the Summary and Reports pages are rendered using Chart.js, with data fetched asynchronously via HTTP GET requests in JSON format. The entire application is hosted on a single Mac server using NGINX as a reverse proxy, ensuring performance and accessibility. ADA/WCAG accessibility principles are applied to all UI components to enhance usability for all users.
        </p>
    </div>
    </div>
  );
}

export default Dashboard;
