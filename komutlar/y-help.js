const Discord = require("discord.js");



exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Wexy Bot")
 

.setTimestamp()
.setDescription(" **!fun** = Fun Komutları \n **!moderasyon** = Moderantion Komutları \n **!kullanıcı** = Kullanıcı Komutları")
.setImage("https://cdn.discordapp.com/attachments/810218791517552650/811860778684645396/standard_7.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","yardim"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}