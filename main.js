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
    client.user.setPresence({
        status: 'online',
        activity: {
            name: '-help',
        }
    })
    console.log('Lewds en avance les loulous');
})

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'rule34'){
        client.commands.get('rule34').execute(message,args, client);
    }else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }else if (command === 'flip'){
        client.commands.get('flip').execute(message,args, client);
    }else if (command === 'number'){
        client.commands.get('number').execute(message,args, client);
    }else if (command === 'ball'){
        client.commands.get('ball').execute(message,args, client);
    }else if (command === 'dick'){
        client.commands.get('dick').execute(message,args, client);
    }else if (command === 'gay'){
        client.commands.get('gay').execute(message,args, client);
    }else if (command === 'help'){
        client.commands.get('help').execute(message, client);
}});



client.login(config.token);