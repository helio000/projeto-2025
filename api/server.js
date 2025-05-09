require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000
const router = require('./src/router');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT,()=>{
    console.log('API respondendo em http://localhost:'+PORT);
});