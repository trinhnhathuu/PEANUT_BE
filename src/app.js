require('dotenv').config();
const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
// init db
require('./dbs/init.monggodb')
// require('./dbs/init.monggodb.lov0')
// const {checkOverload} = require('./hellper/check.connect')
// checkOverload()
// init routes
app.use('', require('./routes'))
//  hading err

module.exports = app