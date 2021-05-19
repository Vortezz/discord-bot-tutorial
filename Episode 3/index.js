const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.on("ready", () => {
    client.user.setActivity(config.activity);
});

client.on("message", message => {
    if (message.author.bot) return;
    message.reply("Salut !")
})

client.login(config.token);