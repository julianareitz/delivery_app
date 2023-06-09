const express = require('express');
const cors = require('cors');

const LoginRouter = require('../routes/login.router');
const RegisterRouter = require('../routes/user.router');
const CustomerRouter = require('../routes/customer.router');
const SellerRouter = require('../routes/seller.router');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE', 'PATCH'],
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', LoginRouter);

app.use('/register', RegisterRouter);

app.use('/customer', CustomerRouter);

app.use('/seller', SellerRouter);

module.exports = app;
