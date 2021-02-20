const Discord = require("discord.js");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Fun Commands")
 .setTimestamp()
.setDescription("**!tersyazı** = Yazdığınız Şeyin Tersini Yazar \n **!atasözü** = Rastgele Atasözü Yazar \n **!Atatürk** = Dene Ve Gör \n **!mcskin** = İsmini Yazdığınız Kullanıcının Mc Skinini Atar \n   **!trump** = Trumpun Yerine Tweet Atarsınız.")
.setImage("https://cdn.discordapp.com/attachments/810218791517552650/811860778684645396/standard_7.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'fun',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}