const express = require('express');
const debug = require('debug')(process.env.APP_NAME);
const chalk = require('chalk'); // Color coded messages

const config = require('./config');

// /src/routes/productRoute/index.js returns a function,
// so there's a function notation in the below line.
// Had it been no function, then "require('./src/routes/productRoute');" wud have been sufficient
const productRouter = require('./src/routes/product')();

const userRouter = require('./src/routes/user');

const cardRouter = require('./src/routes/card');

const customerRouter = require('./src/routes/customer');

const transactionRouter = require('./src/routes/transaction');

// Create the express object, which acts as a web-server
const app = express();

// app.use([path], callback) mounts the specified middleware function at the specified path.
// If no path is specified, the middleware will be executed for every request to the app
app.use('/products', productRouter);
app.use('/users', userRouter());
app.use('/customer', customerRouter());
app.use('/transaction', transactionRouter());
app.use('/card', cardRouter());

app.listen(config.listener.port, () => {
	debug(`Server is running on port ${chalk.green(config.listener.port)}`);
});

app.get("/", (req, res) => {
	res.send(`<b>Hello Prem!</b>`);
});
