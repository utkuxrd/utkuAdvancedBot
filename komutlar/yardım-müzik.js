const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(`Lord Creative Müzik Komutları`, client.user.avatarURL())
.setDescription(`<:a_:821738957997211659>  Lord Creative botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Müzik Oynat__`,`<:a_:821738957997211659>  \`${prefix}oynat\` İstediğiniz Şarkıyı Başlatır`,true)
.addField(`__Müziği Duraklat__`,`<:a_:821738957997211659>  \`${prefix}duraklat\` Şarkıyı Durdurur`,true)
.addField(`__Müziği Devam Ettir__`,`<:a_:821738957997211659>  \`${prefix}devam\` Şarkıyı Devam Ettirir`,true)
.addField(`__Müziği Geç__`,`<:a_:821738957997211659>  \`${prefix}atla\` Şarkıyı Atlar`,true)
.addField(`__Müziği Durdur__`,`<:a_:821738957997211659>  \`${prefix}durdur\` Şarkıyı Kapatıp Odadan Çıkar`,true)
.addField(`__Müzik Kuyruğu__`,`<:a_:821738957997211659>  \`${prefix}kuyruk\` Şarkı Kuyruğunu Gösterir`,true)
.addField(`__Müzik Döngüsü__`,`<:a_:821738957997211659>  \`${prefix}döngü\` Şarkıyı Döngüye Sokar`,true)
.addField(`__Ses Seviyesi__`,`<:a_:821738957997211659>  \`${prefix}ses\` Ses Seviyesini Ayarlarsınız`,true)
.addField(`__Kuyruğu Temizle__`,`<:a_:821738957997211659>  \`${prefix}kuyruk-temizle\` Kuyruk Listesini Temizler`,true)
.addField(`__Kuyruğu Karıştır__`,`<:a_:821738957997211659>  \`${prefix}karıştır\` Kuyruktaki Şarkıları Karıştırır`,true)
.addField(`__Bilgilendirme__`,`<:a_:821738957997211659>  \`${prefix}davet\` | Lord Creative'yi Sunucunuza Davet Edersiniz\n<:a_:821738957997211659>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <:a_:821738957997211659>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "müzik",
  aliases: []
}
