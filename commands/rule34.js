const api = require('../api/request.js');
const Discord = require('discord.js');
const { try } = require('bluebird');

module.exports= {
    name: 'rule34',
    description: "Actual great pictures",
    async execute(message, args, client){
        
        api.getImage(args[0])
        .then(answer => {
            

            //  Code à mettre ici
            //  Variable avec le résultat : answer
            //  Il faut maintenir lire PROPREMENT le json, pour récupérer le count, refaire une requête
            //  via exactement le même principe que celle là (donc api.getImage(args[0],IciMettreLeRandom).then().catch())
            //  pour faire une requête avec un random. DOnc e random est calculé entre 0 et count.

            if(xml.includes('posts count="0"')){
                message.channel.send('Aucun post ne correspond à la recherche "' +args[0]+'".');
            }else{       
    
                //Message Embed
                const embedImage = new Discord.MessageEmbed()
                    .setTitle(/* Mettre les tags qu'il a cherché */)
                    .setDescription(/* Nombre d'image trouvé pour cette recherche : X */)
                    .setImage(/* Lien de l'image */)
                    .setColor('#bd1111')
                    .setFooter('World Best Bot', client.user.avatarURL());  // Affichera le photo du bot dans le Footer (à vérifier si ça fonctionne)
                
                message.channel.send(embedImage);
    
            }




        })
        .catch ((error) => {
            console.error(error);
        });
        
    }
}