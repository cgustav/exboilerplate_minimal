const router = require('express').Router();
//-----------------------------------------
const {Home} = api.controllers;
//-----------------------------------------

/*******************************************************/
/*              EXPRESS ROUTES DEFINITION              */
/*******************************************************/

module.exports = (app) => {
    router.get('/home', Home.welcome)


    app.use(router);
};