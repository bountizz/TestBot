const Discord = require("discord.js")

module.exports= {

    name: 'dick',
    description: "mesurer la taille de bite lol ptdr jsais pas quoi faire en vrai",
 
    execute(message, args, client){

    const dickPerson = message.mentions.users.first();

    if(!dickPerson)  return  message.channel.send('Pas de queue à mesurer')
    else if (dickPerson == client.user ) return message.channel.send('Trop grosse pour être mesurée :face_with_hand_over_mouth:')
    
    
    const Random = Math.ceil(Math.random()*100);
    const sizeOne = '8=D';
    const sizeTwo = '8===D';
    const sizeThree = '8=====D';
    const sizeFour = '8========D';
    const sizeFive = '8=============D';

    if (Random <= 20){
        var a = sizeOne;
    }else if(Random <= 40){
        var a = sizeTwo;
    }else if(Random <= 60){
        var a = sizeThree;
    }else if(Random <= 80){
        var a = sizeFour;
    }else if(Random <= 100){
        var a = sizeFive;
    }

    
    const dickEmbed = new Discord.MessageEmbed()
                .setTitle("Mesureur de queue")
                .setDescription("queue de " + `${dickPerson}` + ": " + a)
                .setColor('#00FFE4')
                .setFooter("World's Best Bot", client.user.displayAvatarURL()); 

    message.channel.send(dickEmbed);


    }
}