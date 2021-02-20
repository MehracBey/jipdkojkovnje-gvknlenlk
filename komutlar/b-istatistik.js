const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const msg = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setFooter(client.user.tag, client.user.avatarURL())
  .addField(
  "» **Sahibim**","<@773558063813754880>"
  )
    .addField(
      "» **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      "» **Çalışma süresi**",
      moment
        .duration(client.uptime)
        .format(" D [gün], H [saat], m [dakika], s [saniye]")
    )
  
  .addField("» **Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
    .addField(
      "» **Kullanıcılar**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
    .addField(
      "» **Sunucular**",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      "» **Kanallar**",
      client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField("» **Ping**", client.ws.ping + " ms", true)
    .addField(
      "» **CPU**",
      `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
    )
    .addField("» **Bit**", `\`${os.arch()}\``, true)
  .setImage("https://cdn.discordapp.com/attachments/810218791517552650/811860778684645396/standard_7.gif")
    .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
    .addField("**➥ Linkler**", "[Davet Linki](https://discord.com/oauth2/authorize?client_id=811238807692771348&scope=bot&permissions=8)\n \n[Destek Sunucu](https://discord.gg/D)\n");

  return message.channel.send(msg);
  
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["i"],
    permLevel: 0,
}

exports.help = {
  name: "istatistik",
};