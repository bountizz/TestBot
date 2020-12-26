const api = require('../api/request.js');


module.exports= {
    name: 'rule34',
    description: "Actual great pictures",
    async execute(message, args){
        
        const xml = await api.getImage(args[0]);
        
        console.log(xml);
        
        let début = xml.indexOf('file_url="') + 'file_url="'.length;
        let fin = xml.lastIndexOf('" parent_id=');
        if(xml.includes('posts count="0"')){
            message.channel.send('Aucun post ne correspond à la recherche "' +args[0]+'".');
        }else{
        message.channel.send(xml.substring(début, fin));
        }
    }
}