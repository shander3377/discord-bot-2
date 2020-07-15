const Discord = require('discord.js');
const alphacodes = require("../../codes/alphass.json");
const galaxycodes = require("../../codes/galaxy.json");
const geometrycodes = require("../../codes/geometry.json");
const hexcodes = require("../../codes/hexs.json");
const pulsarcodes = require("../../codes/pulsarss.json");
const pulsarstock = pulsarcodes.length-1
const alphastock = alphacodes.length-1
const galaxystock = galaxycodes.length-1
const hexstock = hexcodes.length-1
const geometrystock = geometrycodes.length-1

module.exports = {
    name: "stock",
    category: "gen",
    description: "check stock",
    usage: "[command]",
    aliases: ["s"],
    run: async (client, message, args) => {
     const embed = new Discord.RichEmbed()
     embed.setTitle("Stock")
     embed.setDescription(` Pulsar: ${pulsarstock}\n Alpha: ${alphastock} \n Galaxy: ${galaxystock} \n Hex run: ${hexstock} \n Geometry run: ${geometrystock}`)
message.channel.send(embed)
}
}
