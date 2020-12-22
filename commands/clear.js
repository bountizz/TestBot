const Discord = require("discord.js")

module.exports= {
    name: 'clear',
    description: "clear [x] messages",
    execute(message, args){
        if(args>20){
            message.delete();
            message.channel.send('*Vous ne pouvez pas supprimer plus de 20 messages à la fois.*');
        }else if(args<0){
            message.delete();
            message.channel.send('*Vous ne pouvez pas supprimer un nombre de messages négatif.*');
        }else if(!args[0]){
            message.delete();
            message.channel.send('*Veuillez préciser le nombre de messages à supprimer.*');
        }else{
            message.channel.bulkDelete(args[0]);
            message.channel.send("*" + args[0] + ' messages ont été supprimés.*');
        }
    }
}