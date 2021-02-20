const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(" Wexy Bot")
 .setTimestamp()
.setDescription(" **!istatistik** = Botun İstatistiklerine Bakarsınız \n **!sunucubilgi** = Sunucu Hakkında Bilgi Verir \n **!korona** = Yazdığınız Ülkenin Korona Durumunu Bildirir  \n **!avatar** = Etiketlediyiniz Kişinin Profil Fotolarını Görürsünüz \n **!toplamkomut** = Botdaki Toplamkomutu Yazar \n  **!yetkilerim** = Sunucudaki Kendi Yetkilerinizi Görürsünüz \n **!havadurumu** = Yazdığınız Bölgenin Havadurumunu Gösterir")
.setImage("https://cdn.discordapp.com/attachments/810218791517552650/811860778684645396/standard_7.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['kullanici'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}