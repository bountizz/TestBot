const api = require('../api/request.js');


module.exports= {
    name: 'rule34',
    description: "Actual great pictures",
    async execute(message, args){
        
        const xml = await api.getImage(args[0]);
        
        console.log(xml);
        
        if(xml.includes('posts count="0"')){
            message.channel.send('Aucun post ne correspond à la recherche "' +args[0]+'".');
        }else{
        
        

        let débutC = xml.indexOf('posts count="') + 'posts count="'.length;
        let finC = xml.lastIndexOf('" offset=');
        
        let postCount = xml.substring(débutC, finC);
        console.log(postCount);
        let random = Math.ceil(Math.random()*postCount);
        console.log(random);

        
        
        let début = xml.indexOf('file_url="') + 'file_url="'.length;
        let fin = xml.lastIndexOf('" parent_id=');
        
        message.channel.send(xml.substring(début, fin));
        }
    }
}