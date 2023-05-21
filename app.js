const express = require('express');
const fs =require('fs');


const app = express();

const bodyParser = require('body-parser');

const loginRouter = require('./routes/login');
const messageRouter = require('./routes/message');

app.use(bodyParser.urlencoded());


app.use(loginRouter);
app.use(messageRouter);

app.listen(3000);