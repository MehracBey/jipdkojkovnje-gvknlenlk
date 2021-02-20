const ms = require('ms');
require("parse-ms")
exports.run = async (client, message, args) => {
  //DarkCode
  let giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        return message.channel.send(':x: Kanal etiketlesen diyom');
    }
//DarkCode
    // Giveaway duration
    let giveawayDuration = args[1];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: Düzgün Süre gir!');
    }
//DarkCode
    // Number of winners
    let giveawayNumberWinners = args[2];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: Kaç kişi kazanacak söyle !');
    }
//DarkCode
    // Giveaway prize
    let giveawayPrize = args.slice(3).join('');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send(':x: Bi yazı yazmalısın!');
    }
//DarkCode
    // Start the giveaway
//DarkCode
    client.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // The giveaway winner count
        winnerCount: giveawayNumberWinners,
        // Who hosts this giveaway
        hostedBy: message.author ,
        // Messages
        messages: {
            giveaway:"@everyone\n\n🎉🎉 **Çekiliş Başladı** 🎉🎉",
				giveawayEnded: "@everyone\n\n🎉🎉 **Çekiliş bitti** 🎉🎉",
				timeRemaining: "Kalan süre: **{duration}**!",
				inviteToParticipate: "Çekilişe katılmak için 🎉 emojisine tıklayın!",
				winMessage: "Tebrikler, {winners}! kazandın **{prize}**!",
				embedFooter: "Çekiliş",
				noWinner: "Çekiliş iptal edildi yeterli katılım yok.",
				hostedBy: "{user} Tarafından",
				winners: "kazanan(lar)",
            endedAt: "Çekilişi Yapan Kişi",
            units: {
                seconds: "Saniye",
                minutes: "Dakika",
                hours: "Saat",
                days: "Gün",
                pluralS: false //DarkCode
            }
        }
    })
}
//DarkCode
  //DarkCode
  //DarkCode
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4,
  kategori: "beta",
};
//DarkCode
exports.help = {
  name: 'çekiliş',
  description: "",
  usage: '',
}; 