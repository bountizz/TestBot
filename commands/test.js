const Discord = require("discord.js")

module.exports= {
    name: 'test',
    description: "arg message",
    execute(message, args){
        if (args < 2){
            message.channel.send('Veuillez insérer un titre et un sous-titre, vu que jss bloqué la ça va mettre Undefined en sous titre si tu mets que le titre');
        }else{
        const embed = new Discord.MessageEmbed()
            .addField(args[0], args[1]);
        message.channel.send(embed);
    }
}};