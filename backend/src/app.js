const express = require('express');
const app= express();
const router = require('./router')


app.use(express.json())
app.use(router)
app.get('/tasks', (Request, Response) => Response.status(200).send('olá, mundo'));

module.exports = app