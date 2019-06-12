const config = require(process.cwd() + '/src/server/env/' + process.env.NODE_ENV + '.js')
//-----------------------------------------

/*******************************************************/
/*       DATABASE CONNECTION & CONFIGURATION           */
/*******************************************************/

module.exports = (function () {

  return new Promise(function (resolve, reject) {
    resolve(console.info('No DB Implemented yet.'))
    //Example
    // let mongoConfig = config.mongodb
    // let options = {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    // }

    // mongoose.connect(mongoConfig.uri, options)
    //   .then(db => {
    //     console.log('DB Connected.');
    //     resolve(db)
    //   })
    //   .catch(err => {
    //     console.log('Error conexión ', err);
    //     reject(err)
    //   })

  });

})()