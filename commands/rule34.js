const api = require('../api/request.js');


module.exports= {
    name: 'rule34',
    description: "Actual great pictures",
    async execute(message, args){
        
        const xml = await api.getImage(args[0]);
        
        console.log(xml);
    
    }
}