const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('API RUNNING'))
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));