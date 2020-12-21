const api = require('../api/request.js');


module.exports= {
    name: 'rule34',
    description: "Actual great pictures",
    execute(message, args){
        /**
         * TODO ...
         * 
         * Info :
         * Appel de l'api :
         *      api.getImage('rayman');
         */
        api.getImage('rayman')
    }
}