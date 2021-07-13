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

    let content = message.content.split(" ");
    let command = content[0];
    let args = content.slice(1);
    let prefix = config.prefix;

    if (message.content.startsWith(config.prefix)) {
        try {
            let commandFile = require(`./commands/${command.slice(prefix.length)}.js`)
            commandFile.execute(client, message, args);
        } catch (e) {
            console.warn(`Erreur avec le handler : ${e}`);
            return;
        }
    }
    /*if (message.content.startsWith(config.prefix)) {
        switch (message.content) {
            case config.prefix + "ping":
                message.channel.send("Pong ! Calcul en cours...").then(msg => {
                    msg.edit(`Pong ! Latence : ${msg.createdTimestamp - message.createdTimestamp}`)
                })
            default:
                return;
        }
    }*/
})

client.login(config.token);