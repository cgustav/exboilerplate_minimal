const fs = require('fs')
const path = require('path')
let apiPath = process.cwd() + '/src/api/'
//---------------------------------------

let models = {}
let controllers = {}

module.exports = {
    /**
     * @description carga todos los archivos contenidos en la carpeta 
     * models.
     * @returns {Object} models
     */
    loadModels: (function () {
        fs.readdirSync(apiPath + 'models').forEach(function (file) {
            let filename = path.basename(file, '.js');
            models[filename] = require(apiPath + 'models/' + filename)
        })
        return models;
    })(),
    /**
     * @description carga todos los archivos contenidos en la carpeta 
     * controllers.
     * @returns {Object} models
     */
    loadControllers: (function () {
        fs.readdirSync(apiPath + 'controllers').forEach(function (file) {
            let filename = getFileName(file)
            controllers[filename.replace('Controller', '')] = require(apiPath + 'controllers/' + filename)
        })
        return controllers;
    })()
}

function getFileName(file) {
    return file.replace(/(\.)(.*?)([a-z]{0,}[A-Z]{0,})/g, '') //regex para obtener el file sin extensión
}