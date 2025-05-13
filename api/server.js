require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/router');

const PORT = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
