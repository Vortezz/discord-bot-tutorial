module.exports = {
    name: "ping",
    execute(client, message, args) {
        days = Math.floor((client.uptime / (1000 * 60 * 60 * 24)) % 60).toString()
        hours = Math.floor((client.uptime / (1000 * 60 * 60)) % 60).toString()
        minuts = Math.floor((client.uptime / (1000 * 60)) % 60).toString()
        seconds = Math.floor((client.uptime / 1000) % 60).toString()

        message.channel.send(`Uptime : ${days}d ${hours}h ${minuts}m ${seconds}s`)
    }
}