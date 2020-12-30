const api = require('../api/request.js');
const Discord = require('discord.js');

module.exports= {
    name: 'rule34',
    description: "Actual great pictures",
    async execute(message, args){
        
        api.getImage(args[0]).then(answer => {
            
            
            //Code à mettre ici


        })

       
        if(false){


            /*if(xml.includes('posts count="0"')){
                message.channel.send('Aucun post ne correspond à la recherche "' +args[0]+'".');
            }else{*/
            
                /*          
                let débutC = xml.indexOf('posts count="') + 'posts count="'.length;
                let finC = xml.lastIndexOf('" offset=');
                
                let postCount = xml.substring(débutC, finC);
                console.log(postCount);
                let random = Math.ceil(Math.random()*postCount);
                console.log(random);
                */

                let début = xml.indexOf('file_url="') + 'file_url="'.length;
                let fin = xml.lastIndexOf('" parent_id=');
                

                //embed test
                const embedRule = new Discord.MessageEmbed()
                    .setColor('#bd1111')
                    .setImage(xml.substring(début, fin));
                
                message.channel.send(embedRule);

                //message.channel.send(xml.substring(début, fin));

            //}

        }
        
    }
}