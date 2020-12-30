const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

const prefix = config.prefix;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('Lewds en avance les loulous');
})

client.on('message', message =>{

    /*test modération
    let blackListed = ['enculé', 'filsDePute', 'fdp', 'niqueTaMere', 'niqueTonPere', 'chibrax'];
    let foundInText = false;
    for (let i in blackListed){
        if (message.content.replace(/\s+/g, '').toLowerCase().includes(blackListed[i].replace(/\s+/g, '').toLowerCase())) foundInText = true;
    }

    if (foundInText) {
        message.author.send("C'est pas bien de jurer");
        message.delete();
    }

    */
    //fin test modération

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if (command === 'instagram'){
        client.commands.get('instagram').execute(message, args);
    }else if(command === 'rule34'){
        // lancer le fichier commands/rule34 avec deux arguments, l'objet message de l'event, et les arguments de la commande
        client.commands.get('rule34').execute(message,args, client);
    // embed message
    }else if(command === 'test'){
        client.commands.get('test').execute(message, args);
    }else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
}});




client.login(config.token);