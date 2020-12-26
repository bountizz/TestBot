const api = require('../api/request.js');


module.exports= {
    name: 'rule34',
    description: "Actual great pictures",
    async execute(message, args){
        
        const xml = await api.getImage(args[0]);
        
        console.log(xml);
        

        /*pour chopper le file_url:
        let début = xml.indexOf('file_url="') + 'file_url="'.length;
        let fin = xml.lasIndexOf('" parent_id=');
        message.chanel.send(xml.substring(début, fin - début));
        */
    }
}