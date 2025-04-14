const express = require('express');
const router = express.Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');

// Auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token.split(" ")[1], "secret-key");
    req.user = decoded;
    next();
  } catch {
    res.status(400).send('Invalid token');
  }
};

router.get('/solar-data', authMiddleware, async (req, res) => {
  try {
    const response = await axios.get('https://power.larc.nasa.gov/api/temporal/daily/point', {
      params: {
        start: '20240401',
        end: '20240410',
        latitude: 35.2271,
        longitude: -80.8431,
        community: 'RE',
        parameters: 'ALLSKY_SFC_SW_DWN',
        format: 'JSON'
      }
    });

    const data = response.data.properties.parameter.ALLSKY_SFC_SW_DWN;
    const chartData = Object.entries(data).map(([date, value]) => ({
      date,
      radiation: value
    }));

    res.json(chartData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Failed to fetch data from NASA');
  }
});

module.exports = router;
