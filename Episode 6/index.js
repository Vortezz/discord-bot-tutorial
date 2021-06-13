const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

const activities = ["être codé", "regarder une vidéo", "mzeef", "zefzefzef", "zfqzefzefzef"]

client.on("ready", () => {
    setInterval(() => {
        randomA = Math.floor(Math.random() * (activities.length - 1) + 1)

        client.user.setActivity(activities[randomA], { type: "COMPETING", url: 'https://www.youtube.com/Vortezz' })
    }, 10 * 1000)
})

client.on("guildMemberAdd", member => {
    const channel = client.channels.cache.get('751898499628662894')
    if (!channel) return;
    channel.send(`${member.displayName} nous a rejoint !`)
})

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