const Discord = require("discord.js")

module.exports= {

    name: 'ball',
    description: "the truth ball",
 
    execute(message, args, client){

    
    const Random = Math.ceil(Math.random()*100);
    

    var affirmatif = ["oui","bien sûr","absolument","c'est une bonne idée","je ne vois pas d'autre solution","MAIS OUI C'EST CLAIR"];
    var negatif = ["non","absolument pas","jamais","que dalle","oui mais non"];
    var incertain = ["j'sais pas déso mon reuf", "aucune idée", "pas sûr","joker","t'es sûr de toi la ?","ptdr"]

    if(!args[0]){
        message.channel.send('Veuillez poser une question.')
        return
    }else if (Random <= 45){
        var reponse = affirmatif[Math.floor(Math.random() * affirmatif.length)];
    }else if(Random <= 55){
        var reponse = incertain[Math.floor(Math.random() * incertain.length)];
    }else if(Random <= 100){
        var reponse = negatif[Math.floor(Math.random() * negatif.length)];
    }

    const ball = new Discord.MessageEmbed()
                .setTitle("Le devin")
                .setDescription(reponse)
                .setColor('#6400FF')
                .setFooter("World's Best Bot", client.user.displayAvatarURL()); 

    message.channel.send(ball);
    }
}