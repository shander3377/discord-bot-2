const Discord = require('discord.js');
const alphacodes = require("../../codes/alphass.json");
const stock = alphacodes.length-1
let num = 0;

module.exports = {
    name: "alpha",
    category: "gen",
    description: "gen alpha game",
    usage: "[command]",
    aliases: ["Alpha"],
    run: async (client, message, args) => {
     
   num = num + 1

message.channel.send("code sent pls check ur dms")
    message.author.send(alphacodes[num]);
     if(num === stock){
           message.channel.send("Stock finished")
     }
}
}
