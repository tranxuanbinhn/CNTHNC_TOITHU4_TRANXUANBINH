const express = require('express');
const greetMiddleware = require('./greet.js')
express().use('/api/v1/', greetMiddleware({greeting:'Hello World'})).listen(3170)