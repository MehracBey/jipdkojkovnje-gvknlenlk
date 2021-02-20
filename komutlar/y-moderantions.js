const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(" Wexy Moderantion Commands")
 .setTimestamp()
.setDescription("**!banlist** = Sunucudan Banlanan Üyeleri Görürsünüz  \n **!nuke** = Bulunduğunuz Kanalı Siler \n **!oylama** = Oylama Yaparsınız \n **!lock** = Mesajının Yazıldığı Kanal Üyelerin Mesajına Kapatılır \n **!unlock** = Komutunun Kullanıldığı Kanal Üyelerin Mesajlarına Açılır \n **!sil** = Belirdiğiniz Kadar Mesaj Siler \n  **!çekiliş** = Çekiliş Başlatırsınız \n **!çekiliş-sil** = Devam Etmekde Olan Bir Çekilişi Silersiniz")
.setImage("https://cdn.discordapp.com/attachments/810218791517552650/811860778684645396/standard_7.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}