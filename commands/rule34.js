const api = require('../api/request.js');
const Discord = require('discord.js');

module.exports= {
    name: 'rule34',
    description: "Actual great pictures",
    async execute(message, args, client){
        
        api.getImage(args[0])
        .then(answer => {
            
            const reponse = JSON.parse(answer);
            console.log(reponse);
            var bleh = reponse['posts']['$']['count'];
            console.log(bleh);
            if (bleh != 0){
            var random = Math.ceil(Math.random()*(bleh));
            console.log("random = " + random);

            api.getImage(args[0],random)
            .then(answer2 =>{

                const reponse2 = JSON.parse(answer2);
                //console.log(reponse2);
                //console.log(reponse2);
                var putainFini = reponse2['posts']['post'][0]['$']['file_url'];
                console.log(putainFini);
                //message.channel.send(putainFini);

                const embedImage = new Discord.MessageEmbed()
                .setTitle(args[0] + ', recherche faite par ' + message.author.username)
                .setURL(putainFini)
                .setDescription(bleh + ' résultats trouvés.')
                .setImage(putainFini)
                .setColor('#bd1111')
                .setFooter("World's Best Bot", client.user.displayAvatarURL()); 
            
            message.channel.send(embedImage);
       

            }).catch ((error) => {
                console.error(error);
            });
        }else {
            message.channel.send('Aucun post ne correspond à la recherche "' +args[0]+'".');
        }

            //  Code à mettre ici
            //  Variable avec le résultat : answer - fait
            //  Il faut maintenant lire PROPREMENT le json, pour récupérer le count, refaire une requête
            //  via exactement le même principe que celle là (donc api.getImage(args[0],IciMettreLeRandom).then().catch())
            //  pour faire une requête avec un random. DOnc e random est calculé entre 0 et count.

            
            //message.channel.send('Aucun post ne correspond à la recherche "' +args[0]+'".');
        })
        .catch ((error) => { /* envoie error au joueur */
            console.error(error);
        });
        
    }
}