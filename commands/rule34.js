const api = require('../api/request.js');
const Discord = require('discord.js');

module.exports= {
    name: 'rule34',
    description: "Actual great pictures",
    async execute(message, args, client){
        
        api.getImage(args[0])
        .then(answer => {
            
            const reponse = JSON.parse(answer);
            var bleh = reponse['posts']['$']['count'];
            if (bleh != 0){
            var random = Math.ceil(Math.random()*(bleh));

            api.getImage(args[0],random)
            .then(answer2 =>{

                const reponse2 = JSON.parse(answer2);
                var putainFini = reponse2['posts']['post'][0]['$']['file_url'];

                const embedImage = new Discord.MessageEmbed()
                .setTitle(args[0] + ', recherche faite par ' + message.author.username)
                .setURL(putainFini)
                .setDescription(bleh + ' résultats trouvés.')
                .setImage(putainFini)
                .setColor('#bd1111')
                .setFooter("World's Best Bot", client.user.displayAvatarURL()); 
            
            message.channel.send(embedImage);
            let date_ob = new Date();
            let hours = date_ob.getHours();
            let minutes = date_ob.getMinutes();
            console.log(message.author.username + ' recherche ' + args[0] + " a " + hours + ":" + minutes);
       
            }).catch ((error) => {
                console.error(error);
            });
        }else {
            message.channel.send('Aucun post ne correspond à la recherche "' +args[0]+'".');
        }
        })
        .catch ((error) => { 
            console.error(error);
        });
        
    }
}