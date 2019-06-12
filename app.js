const express = require('express');
const config = require('./src/server/config');
//const ENV = require(process.cwd() + '/src/server/env/' + process.env.NODE_ENV + '.js')

//-----------------------------------------
//const config = require(process.cwd() + '/src/server/env/' + process.env.NODE_ENV + '.js')

(async function init() {
  console.info('starting server...');

    let app = await config(express());

    app.set('port', process.env.PORT || 3016);

    app.listen(app.get('port'),()=>{
        console.log('Server ready on port', app.get('port'));
    }); 

})()

