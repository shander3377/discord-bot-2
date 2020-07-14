const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '+';
const fs = require('fs');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});


bot.once('ready', () => {
	console.log('Ready!');
	
let status = `${bot.users.size} members in ${bot.guilds.size} guilds`
	
		bot.user.setActivity(status, {
			type: "WATCHING"

});
})
 bot.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = bot.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(bot, message, args);
});

 
bot.login(process.env.TOKEN)