const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.on("ready", () => {
    client.user.setActivity(config.activity);
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.startsWith(config.prefix)) {
        switch (message.content) {
            case config.prefix + "ping":
                message.channel.send("Pong ! Calcul en cours...").then(msg => {
                    msg.edit(`Pong ! Latence : ${msg.createdTimestamp - message.createdTimestamp}`)
                })
            default:
                return;
        }
    }
})

client.login(config.token);