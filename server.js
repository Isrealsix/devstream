const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to DB
connectDB();
app.get('/', (req, res) => res.send('API RUNNING'))
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));