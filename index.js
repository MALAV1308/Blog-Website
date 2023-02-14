const express = require('express');
const path= require('path');
const app = express();
const host = '127.0.0.1';

const port = '8080';


app.use('/',require(path.join(__dirname,'routes/blog.js'))) 
app.use('*', (req, res) => {
    res.status(400).send(`Page 404 : Page Not Found ${req.url}`);
  })

app.listen(port, host, () => console.log(`Server running at ${host}:${port}`));