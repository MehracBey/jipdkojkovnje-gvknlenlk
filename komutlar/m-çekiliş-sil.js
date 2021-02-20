exports.run = async (client, message, args) => {
    //DarkCode
    //DarkCode
    //DarkCode
    //DarkCode
     let messageID = args[0];
        if(!messageID) return message.channel.send("Lütfen geçerli mesaj id sini giriniz. \nÖrnek a/çekiliş-sil 756462515881508904") 
      if(isNaN(args[0])) {
            return message.reply('Sadece sayı giriniz')
        }
        //DarkCode
            //DarkCode
    //DarkCode
            client.giveawaysManager.delete(messageID).then(() => {
                message.channel.send("Başarılı! Çekiliş silindi.");
            }).catch((err) => {
                message.channel.send(""+messageID+" ID li mesaj bulunamadı. Lütfen kontrol edip tekrar deneyin");
            });
        //DarkCode
    }
    exports.conf = {
      enabled: false,
      guildOnly: false,
      aliases: ["delete-giveaway"],
      permLevel: 0,
      kategori: "cekilis"
    };
    //DarkCode
    exports.help = {
      name: 'çekiliş-sil',
      category: 'cekilis',
      description: 'Çekilişi siler.',
      usage: 'cekilis'
    };
    
    