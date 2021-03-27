 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Lord Creative Sayaç Komutları`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`<:a_:821738957997211659>  Lord Creative botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Sayaç Ayarla__`,`<:a_:821738957997211659>  \`${prefix}sayaç-ayarla\` Sunucunuzda Sayacı Ayarlar.`,true)
.addField(`__Oto Cevap Liste__`,`<:a_:821738957997211659>  \`${prefix}sayaç-hg-mesaj\` Sunucunuzdaki Sayacın Hoş Geldin Mesajını Ayarlar.`,true)
.addField(`__Oto Cevap Sil__`,`<:a_:821738957997211659>  \`${prefix}sayaç-bb-mesaj\` Sunucunuzdaki Sayacın Görüşürüz Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`<:a_:821738957997211659>  \`${prefix}davet\` | Lord Creative'yi Sunucunuza Davet Edersiniz\n<:a_:821738957997211659>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <:a_:821738957997211659>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "sayaç",
  aliases: []
}