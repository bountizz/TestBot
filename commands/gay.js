const Discord = require("discord.js")

module.exports= {

    name: 'gay',
    description: "à quel point es-tu gay ?",
 
    execute(message, args, client){

    const gayPerson = message.mentions.users.first();

    if(!gayPerson)  return  message.channel.send('Pas de gay à mesurer')
    else if (gayPerson == client.user ) return message.channel.send('No homo :flushed:')
    
    const Random = Math.ceil(Math.random()*100);

    const a = ':green_square:';
    const b = ':green_square::green_square:';
    const c = ':green_square::green_square::green_square:';
    const d = ':green_square::green_square::green_square::green_square:';
    const e = ':green_square::green_square::green_square::green_square::yellow_square:';
    const f = ':green_square::green_square::green_square::green_square::yellow_square::yellow_square:';
    const g = ':green_square::green_square::green_square::green_square::yellow_square::yellow_square::yellow_square:';
    const h = ':green_square::green_square::green_square::green_square::yellow_square::yellow_square::yellow_square::orange_square:';
    const i = ':green_square::green_square::green_square::green_square::yellow_square::yellow_square::yellow_square::orange_square::orange_square:';
    const j = ':green_square::green_square::green_square::green_square::yellow_square::yellow_square::yellow_square::orange_square::orange_square::red_square:';

    if (Random <= 10){
        var k = a;
    }else if(Random <= 20){
        var k = b;
    }else if(Random <= 27){
        var k = c;
    }else if(Random <= 35){
        var k = d;
    }else if(Random <= 45){
        var k = e;
    }else if(Random <= 53){
        var k = f;
    }else if(Random <= 60){
        var k = g;
    }else if(Random <= 70){
        var k = h;
    }else if(Random <= 80){
        var k = i;
    }else if(Random <= 100){
        var k = j;
    }

    
    const gayEmbed = new Discord.MessageEmbed()
                .setTitle("Mesureur de niveau de gayness")
                .setDescription(`A quel point ${gayPerson} est gay ?
                ` + k )
                .setColor('#E000FF')
                .setFooter("World's Best Bot", client.user.displayAvatarURL()); 

    message.channel.send(gayEmbed);

    }
}