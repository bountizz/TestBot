const Discord = require("discord.js")
let blackListed = ['enculé', 'filsDePute', 'fdp', 'niqueTaMere', 'niqueTonPere', 'chibrax'];
let foundInText = false;

module.exports= {
    name: 'test',
    description: "arg message",
    execute(message, args){
       
    for (let i in blackListed){
        if (message.content.replace(/\s+/g, '').toLowerCase().includes(blackListed[i].replace(/\s+/g, '').toLowerCase())) foundInText = true;
    }

    if (foundInText) {
        message.delete();
        message.channel.send("Alors Non");
        
    }else if (!args[1]){
            message.channel.send('Veuillez insérer un titre et un sous-titre.');
    }else{
        const embed = new Discord.MessageEmbed()
            .addField(args[0], args[1]);
        message.channel.send(embed);
    }
}};