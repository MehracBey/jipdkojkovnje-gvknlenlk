const Discord = require('discord.js');

exports.run = async (client , message, args ) => {

let member = message.mentions.users.first() || message.author

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`${member.username} Avatarın`)
.setImage(member.avatarURL())
message.channel.send(embed)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
}

exports.help = {
name: 'avatar'
}