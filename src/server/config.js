const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const Handlr = require('miller-handler');
const cors = require('cors');
//NameSpace = api
api = {}

/*******************************************************/
/*            EXPRESS SERVER CONFIGURATION             */
/*******************************************************/

module.exports = async (app) => {

    //database config
    await require('./database')

    //Error Message Module
    //docs available in https://www.npmjs.com/package/miller-handler
    api.handler = new Handlr('es')

    //Load all files inside src/api/models into api.models namespace
    api.models = require('./loaders').loadModels

    //Load all files inside src/api/controllers into api.controllers namespace
    api.controllers = require('./loaders').loadControllers

    app.use(cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
    }))

    //Morgan is a HTTP request logger middleware for node.js
    //docs available in https://www.npmjs.com/package/morgan
    app.use(morgan('dev'))

    //URL Enconded express 4.x > config
    app.use(express.urlencoded({
        extended: false
    }))
    app.use(express.json());

    //Override with the X-HTTP-Method-Override header in the request
    //docs available in https://www.npmjs.com/package/method-override
    app.use(methodOverride('X-HTTP-Method-Override'))

    //routes
    require('./routes')(app)

    return app;

}