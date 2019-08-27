const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const userRoutes = require('./routes/v1/UserRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/users', userRoutes);

module.exports = app;
