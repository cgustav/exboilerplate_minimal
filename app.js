const express = require('express');
const config = require('./src/server/config');
//-----------------------------------------

(async function init() {
    console.info('starting server...');

    let app = await config(express());

    app.set('port', process.env.PORT || 3016);

    app.listen(app.get('port'), () => {
        console.log('Server ready on port', app.get('port'));
    });

})()