const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;
const kuyruk = client.player.getQueue(message.guild.id);

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 010 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`<:a_:821738957997211659>   | Kuyruğu görüntüleyebilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata3 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`<:a_:821738957997211659>    | Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());    
if(!kuyruk) return message.channel.send(hata3)

//------------------------------------------------//    
  
if(!message.member.voice.channel) return message.channel.send({embed: {color: AloneHata, description: `<:a_:821738957997211659>  q | Kuyruğu görüntüleyebilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!kuyruk) return message.channel.send({embed: {color: AloneHata, description: `<:a_:821738957997211659>    | Şu anda hiçbir müzik çalmamaktadır!` }})
let q = kuyruk.songs.map((song, i) => {
return `${i === 0 ? '<:a_:821738957997211659>   | Şu Anda Çalınan Müzik' : `\nKuyruk No: ${i}`} \n**Müziğin Adı:** \`${song.name}\` \n**Müziği Yükleyen Kanal:** \`${song.author}\``
    }).join('\n');  
message.channel.send({embed: {color: AloneDogru, title: `Lord Creative |  Müzik Kuyruğu`, description: `${q}`}})
}
  
module.exports.config = {
    name: "kuyruk",
    aliases: []
};
