const Discord = require('discord.js');
const alphacodes = require("../../codes/alphass.json");
const galaxycodes = require("../../codes/galaxy.json");
const geometrycodes = require("../../codes/geometry.json");
const hexcodes = require("../../codes/hexs.json");
const pulsarcodes = require("../../codes/pulsarss.json");
const pulsarstock = pulsarcodes.length-1
const alphastock = alphacodes.length-1
const galaxystock = galaxycodes.length-1
const hexstock = geometrycodes.length-1
const pulsarstock = hexcodes.length-1

module.exports = {
    name: "alpha",
    category: "gen",
    description: "gen alpha game",
    usage: "[command]",
    aliases: ["Alpha"],
    run: async (client, message, args) => {
     const embed = new Discord.RichEmbed()
     .setTitle("Stock")
     .setdescription(` Pulsar: ${pulsarstock}\n Alpha: ${alphastock} \n Galaxy: ${galaxystock} \n Hex run: ${hexstock}`)
message.channel.send(embed)
}
}
