const Discord = require('discord.js');

const morpion = require('../games/morpion.js');


module.exports= {
    name: 'ttt',
    description: "play tic tac toe",
 
    execute(message, args){
        
        const player1 = message.mentions.users.first(); //trouve qui on a tag
        const player2 = message.author;

        if (!player1){
            message.delete();
            message.reply('Veuillez préciser avec qui vous souhaitez jouer.');
            return
        }else if(player1 == player2){
            message.delete();
            message.reply('Vous ne pouvez pas jouer avec vous-même.');
            return
        }else{
            message.channel.send(`${player1}, veux-tu jouer contre ${player2}?\n*Tu as 10 secondes pour accepter ou refuser.*`)
                .then(msg => {
                    message.react('👍');
                    message.react('👎');
                    //CHANGER LE PLAYER2.ID PAR PLAYER1.ID UNE FOIS TERMINÉ  ↓↓↓↓
                    message.awaitReactions((reaction, user) => user.id == player2.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),{max: 1, time: 10000})
                        .then(async collected => {
                            if(collected.first().emoji.name == '👍') {
                                msg.edit(`${player1} it's your turn.\n⬜⬜⬜\n⬜⬜⬜\n⬜⬜⬜`)
                                    .then(messageEnvoye => {
                                        messageEnvoye.react('1️⃣');
                                        messageEnvoye.react('2️⃣');
                                        messageEnvoye.react('3️⃣');
                                        messageEnvoye.react('4️⃣');
                                        messageEnvoye.react('5️⃣');
                                        messageEnvoye.react('6️⃣');
                                        messageEnvoye.react('7️⃣');
                                        messageEnvoye.react('8️⃣');
                                        messageEnvoye.react('9️⃣');})
                                    .then(console.log('grille affichée'))
                                    .catch(console.error);
                                    
                                    
                                    return;
                            }if(collected.first().emoji.name == '👎') {
                                return msg.edit(`Désolé ${player2}, ${player1} ne souhaite pas jouer avec toi pour le moment.`);
                            }
                            else return message.channel.send('Veuillez simplement accepter avec les émojis 👍 ou 👎');
                        }).catch(async () => {return msg.edit(`${player1} n'a pas accepté à temps.`)});
                })
            }
    }
}
