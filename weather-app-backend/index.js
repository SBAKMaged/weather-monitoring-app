const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/api/weather', async (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;

    if (!lat || !lon) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    try {
        const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
            params: { q: `${lat},${lon}` },
            headers: {
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                'x-rapidapi-key': 'c65d30f075msh8042f3e90a468f9p188e92jsn8e7dadc26166' // Your API key
            }
        });

        res.json(response.data); // Return the weather data
    } catch (error) {
        console.error('Error fetching weather data:', error.message);

        if (error.response && error.response.data) {
            return res.status(500).json({ error: error.response.data });
        }

        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
