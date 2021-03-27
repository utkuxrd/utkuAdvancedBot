const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(`Lord Creative Oto Cevap Komutları`, client.user.avatarURL())
.setDescription(`<a:Lord Creative:749380925619437619> Lord Creative botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Cevap Ekle__`,`<a:ayar:750021160237793311> \`${prefix}otocevap-ekle\` Sunucunuza Özel Komut Eklemenize Yarar.`,true)
.addField(`__Oto Cevap Liste__`,`<a:ayar:750021160237793311> \`${prefix}otocevap-liste\` Sunucunuzdaki Özel Komutların Listesini Gösterir.`,true)
.addField(`__Oto Cevap Sil__`,`<a:ayar:750021160237793311> \`${prefix}otocevap-sil\` unucunuzdaki Özel Komutu Siler.`,true)
.addField(`__Bilgilendirme__`,`<:a_:821738957997211659>  \`${prefix}davet\` | Lord Creative'yi Sunucunuza Davet Edersiniz\n<:a_:821738957997211659>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <:a_:821738957997211659>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otocevap",
  aliases: []
}
