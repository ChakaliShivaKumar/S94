import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Clean Energy Innovation Summary</h2>
      <p>
        In a major step forward for renewable energy, researchers have achieved a record-breaking efficiency
        in solar panel technology by combining perovskite and silicon materials in a tandem configuration.
        This hybrid design significantly enhances energy conversion rates, reaching efficiencies of over 33%,
        far exceeding traditional silicon-only panels. Perovskites, which are low-cost and lightweight,
        absorb a different part of the solar spectrum than silicon. By stacking them, the tandem system
        maximizes light absorption and minimizes energy loss. The innovation addresses one of the key
        barriers to widespread solar adoption—efficiency—without dramatically increasing cost.
        The researchers also reported better stability in outdoor conditions, making this technology more
        viable for real-world deployments. As global energy demand rises and climate concerns intensify,
        this breakthrough could pave the way for cheaper, more efficient solar panels across residential,
        commercial, and industrial use cases. The combination of scalability, performance, and affordability
        represents a major step toward accelerating the clean energy transition and reducing our reliance
        on fossil fuels.
      </p>
      <p>
        🔗 Reference:{" "}
        <a
          href="https://www.sciencedaily.com/releases/2023/11/231115120048.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          ScienceDaily Article
        </a>
      </p>
    </div>
  );
};

export default Dashboard;
