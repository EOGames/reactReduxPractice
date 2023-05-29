const express = require('express');
const cors = require('cors');
const Router = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cors());

app.use('/api',Router);

app.listen(PORT,()=>
{
    console.log(`Server Is Up And Running At Port ${PORT}`);
});