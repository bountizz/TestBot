const Discord = require("discord.js")

module.exports= {
    name: 'number',
    description: "jeu a la con du + ou -",

    execute(message, args, client){

        function a(message, client, round){

        let nombreAleatoire = Math.ceil(Math.random()*100);
        let secondAleatoire = Math.ceil(Math.random()*100);
        const joueur = message.author;
        
        //message de fin de game
        var fin = new Discord.MessageEmbed()
        .setTitle("Plus ou Moins ?")
        .setDescription(`Partie terminée !
        le prochain nombre était ` + secondAleatoire + `.
        Vous avez survécu ` + round + ` rounds`)
        .setColor('#94E9DC')
        .setFooter("World's Best Bot", client.user.displayAvatarURL());

        //message de base
        var number = new Discord.MessageEmbed()
        .setTitle("Plus ou Moins ?")
        .setDescription('Round ' + round + `
        La machine indique ` +  nombreAleatoire + `.
        Penses-tu que le prochain nombre sera plus ou moins grand ?`)
        .setColor('#94E9DC')
        .setFooter("World's Best Bot", client.user.displayAvatarURL()); 

        message.channel.send(number).then(sentEmbed => {
            sentEmbed.react('⬇️');
            sentEmbed.react('⬆️');
            sentEmbed.awaitReactions((reaction, user) => user.id == joueur.id && (reaction.emoji.name == '⬆️' || reaction.emoji.name == '⬇️'),{max: 1, time: 10000})
                .then(async collected => {
                    if(collected.first().emoji.name == '⬆️') {
                        if (secondAleatoire >= nombreAleatoire){
                            ++round;
                            nombreAleatoire = secondAleatoire;
                            sentEmbed.delete();
                            a(message, client, round);
                        }else{
                            sentEmbed.edit(fin)
                            sentEmbed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                            return;}
                    }else if(collected.first().emoji.name == '⬇️') {
                        if (secondAleatoire <= nombreAleatoire){
                            ++round;
                            nombreAleatoire = secondAleatoire;
                            sentEmbed.delete();
                            a(message, client, round);
                        }else{
                            sentEmbed.edit(fin)
                            sentEmbed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                            return;}
                    }
                    else return sentEmbed.edit(fin);
                }).catch(async () => {return sentEmbed.edit(fin)});
            })  // .then sent embed
        }//function a
        a(message, client, 1);
}   //execute message arg client blabla
}   //module export