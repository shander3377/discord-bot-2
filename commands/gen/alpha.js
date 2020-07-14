const Discord = require('discord.js');
const alphacodes = require("../../codes/alphass.json");
let num = 0;

module.exports = {
    name: "alpha",
    category: "gen",
    description: "gen alpha game",
    usage: "[command]",
    aliases: ["Alpha"],
    run: async (client, message, args) => {
       try {
   num = num + 1

message.channel.send("code sent pls check ur dms")
    message.author.send(alphacodes[num]);
       } catch (error) {
           message.channel.send("Stock finished")
       }
}
}
