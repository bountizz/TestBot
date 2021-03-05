const Discord = require("discord.js")

module.exports= {

    name: 'flip',
    description: "Pile ou Face",
 
    execute(message, args, client){

    const Random = Math.ceil(Math.random()*2);
    const pile = "pile";
    const face = "face";

    if (Random == 1){
        var resultat = "pile";
    }else if(Random == 2){
        var resultat = "face";
    }

    if (!args[0]){
        message.channel.send("Veuillez préciser si vous choisissez pile ou face.");
    }else if (args[0].toLowerCase() == pile || args[0].toLowerCase() == face){
        if (args[0].toLowerCase() == resultat){
            const a = new Discord.MessageEmbed()
                    .setTitle("Pile ou Face")
                    .setDescription(`La pièce indique **` + resultat + `**
                    Vous avez choisi **` + args[0].toLowerCase() + `**
                    Bien joué !`)
                    .setColor('#23FF00')
                    .setFooter("World's Best Bot", client.user.displayAvatarURL()); 
    
            message.channel.send(a);
        }else if (args[0].toLowerCase() != resultat){
            const a = new Discord.MessageEmbed()
                    .setTitle("Pile ou Face")
                    .setDescription(`La pièce indique **` + resultat + `**
                    Vous avez choisi **` + args[0].toLowerCase() + `**
                    Vous avez perdu !`)
                    .setColor('#FF0000')
                    .setFooter("World's Best Bot", client.user.displayAvatarURL()); 
    
            message.channel.send(a);
        }
    }else{ message.channel.send("Veuillez écrire 'pile' ou 'face'.");
    }
    }
}