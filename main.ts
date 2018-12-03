import discord from "discord.js";

require('dotenv').config();

var client = new discord.Client();

client.on('ready', () => {
    console.log("I am ready");
})

client.on('message', (msg) => {
    if(msg.content == "ping") {
        msg.channel.send("pong");
    }
});

client.on('message', (msg) => {
    if(msg.content == "!channel") {
        msg.channel.send("https://www.youtube.com/channel/UC9sDAOfrRCFz2C1vFCp6Y_Q");
    }
});

client.login(process.env.DISCORD_TOKEN);