"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
require('dotenv').config();
var client = new discord_js_1.default.Client();
client.on('ready', function () {
    console.log("I am ready");
});
client.on('message', function (msg) {
    if (msg.content == "ping") {
        msg.channel.send("pong");
    }
});
client.login(process.env.DISCORD_TOKEN);
