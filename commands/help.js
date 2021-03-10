const Discord = require("discord.js")

module.exports= {
    name: 'help',
    description: "helps",

    execute(message, client){

        const embedHelp = new Discord.MessageEmbed()
                .setTitle('**Les différentes commandes:**')
                .setDescription(`-ball
                -clear
                -flip
                -number`)
                .setColor('#bd1111')
                .setFooter("World's Best Bot", client.user.displayAvatarURL()); 

        message.channel.send(embedHelp);
    }
}