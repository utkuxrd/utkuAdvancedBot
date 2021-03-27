const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(`Lord Creative Oto Rol Komutları`, client.user.avatarURL())
.setDescription(`<:a_:821738957997211659>  Lord Creative botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Rol Ayarla__`,`<:a_:821738957997211659>  \`${prefix}otorol-ayarla\` Sunucunuzda Otorol Ayarlar.`,true)
.addField(`__Oto Rol Kapat__`,`<:a_:821738957997211659>  \`${prefix}otorol-kapat\` Sunucunuzdaki Otorol'ü Kapatır.`,true)
.addField(`__Oto Rol Mesaj__`,`<:a_:821738957997211659>  \`${prefix}otorol-mesaj\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Oto Rol Mesaj Sıfırla__`,`<:a_:821738957997211659>  \`${prefix}otorol-mesaj-sıfırla\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`<:a_:821738957997211659>  \`${prefix}davet\` | Lord Creative'yi Sunucunuza Davet Edersiniz\n<:a_:821738957997211659>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <:a_:821738957997211659>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otorol",
  aliases: []
}
