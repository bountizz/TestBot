const Discord = require("discord.js")

module.exports= {
    name: 'number',
    description: "jeu a la con du + ou -",

    execute(message, args, client){

        let nombreAleatoire = Math.ceil(Math.random()*100);
        let secondAleatoire = Math.ceil(Math.random()*100);
        const joueur = message.author;
        let round = 1;
        let partie = true;

        //message de base
        const number = new Discord.MessageEmbed()
        .setTitle("Plus ou Moins ?")
        .setDescription('Round ' + round + `
        La machine indique ` +  nombreAleatoire + `.
        Penses-tu que le prochain nombre sera plus ou moins grand ?`)
        .setColor('#E000FF')
        .setFooter("World's Best Bot", client.user.displayAvatarURL()); 
        message.channel.send(number)
            message.react('⬇️');
            message.react('⬆️');
            message.awaitReactions((reaction, user) => user.id == joueur.id && (reaction.emoji.name == '⬆️' || reaction.emoji.name == '⬇️'),{max: 1, time: 10000})
                .then(async collected => {
                    if(collected.first().emoji.name == '⬆️') {
                        if (secondAleatoire >= nombreAleatoire){
                            ++round;
                            return message.channel.send('bravo le nombre suivant était ' + secondAleatoire);
                            
                        }else message.channel.send('perdu le nombre suivant était ' + secondAleatoire)
                            
                            return;
                    }if(collected.first().emoji.name == '⬇️') {
                        if (secondAleatoire <= nombreAleatoire){
                            ++round;
                            return message.channel.send('bravo le nombre suivant était ' + secondAleatoire);
                        }else message.channel.send('perdu le nombre suivant était ' + secondAleatoire)
                            
                            return;
                    }
                    else return message.channel.send('Temps écoulé');
                }).catch(async () => {return message.channel.send(`Temps écoulé`)});
        

        /*const filter = (reaction, user) => {
            return ['⬆️', '⬇️'].includes(reaction.emoji.name);
        };
        message.awaitReactions(filter, { max: 2, time: 10000, errors: ['time'] })
            .then(collected => {
            const reaction = collected.first();
            
        if (reaction.emoji.name === '⬇️') {
        message.channel.send('down arrow');

        } else if (reaction.emoji.name === '⬆️') {
            message.channel.send('up arrow');
        }
        
        });*/
        
        /*message de fin
        const fin = new Discord.MessageEmbed()
        .setTitle("Plus ou Moins ?")
        .setDescription(`Partie terminée !
        vous avez survécu ` + round + ` rounds`)
        .setColor('#E000FF')
        .setFooter("World's Best Bot", client.user.displayAvatarURL()); 
        message.channel.send(fin);
        */

        /*autres trucs random

        ++round;

        if (nombreAleatoire > secondAleatoire || nombreAleatoire == secondAleatoire){}
        if (nombreAleatoire < secondAleatoire || nombreAleatoire == secondAleatoire){}

        do{
        } while (partie === true || round < 20);

        */
    }
}