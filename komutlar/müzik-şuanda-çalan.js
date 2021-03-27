const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {
/// GEREKLİLER ///  
//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 013 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`<:a_:821738957997211659>  | Şu anda çalan müziği görebilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata2 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`<:a_:821738957997211659>   | Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());    
if(!client.player.isPlaying(message.guild.id)) return message.channel.send(hata2)

//------------------------------------------------//  
/////////////////

/// PREFİX ///
let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;
////////////

/// Çalan Embed ///
const calan = await client.player.nowPlaying(message.guild.id); 
const calanembed = new Discord.MessageEmbed()
.setThumbnail(calan.thumbnail)
.setColor("#22BF41")
.setDescription(`<:a_:821738957997211659>   | Şu Anda Oynatılan:\n\nMüziğin Adı: \n\`${calan.name}\`\n\nMüziği Yükleyen Kanal: \n\`${calan.author}\` \n\nMüziğin Linki: \n[Youtube'den dinlemek için tıkla!](${calan.url})`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL())
message.channel.send(calanembed)
};

///////////////

module.exports.config = {
    name: "çalan",
    aliases: []
};
