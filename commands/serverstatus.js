const api = require('../api/mojangApi.js');
const Discord = require('discord.js');

module.exports= {
    name: 'serverstatus',
    description: "Send an embed with mojang server status",
    async execute(message, client){
        
        api.getStatusServers()
        .then(answer => {
            

            const embedImage = new Discord.MessageEmbed()
                .setTitle("Status des serveurs Mojang")
                .setURL("https://status.mojang.com/check")
                .setFooter('World Best Bot', client.user.displayAvatarURL())
                .setColor("#487eb0");

                answer.forEach(obj => {
                    Object.entries(obj).forEach(([key, value]) => {
                       
                        embedImage
                        .addField(`Status : `, `:${value}_circle: ${key}`, true)
                        
                    });
                });
            
            message.channel.send(embedImage);
        


        })
        .catch ((error) => {
            console.error(error);
        });
        
    }
}