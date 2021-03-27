const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => { 
  const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:a_:821738957997211659>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
if(!args[0]) return message.channel.send(`Yasaklı tag sistemini kullanabilmek için: ${prefix}**yasaklı-tag ekle tag** yazmalısın.`)
let argümanlar = ['ekle', 'çıkar']
if(!argümanlar.includes(args[0])) return message.channel.send(`Sadece ${prefix}**yasaklı-tag ekle**/**çıkar** kullanabilirsin.`)
  
if(args[0] === 'ekle') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(tag) return message.channel.send(`Sadece bir tag ekleyebilirsin.`)
if(!args[1]) return message.channel.send(`Bir tag yazmalısın.`)
  
await db.set(`banned-tag.${message.guild.id}`, args[1])
  
message.channel.send(new Discord.RichEmbed()
.setDescription(`**${args[1]}** tagı yasaklı olarak listeye eklendi.`)
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  
  
if(args[0] === 'çıkar') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(!tag) return message.channel.send(`Hiç tag eklememişsin.`)
if(!args[1]) return message.channel.send(`Bir tag yazmalısın.`)
  
await db.delete(`banned-tag.${message.guild.id}`)
  
message.channel.send(new Discord.RichEmbed()
.setDescription(`**${args[1]}** tagı artık yasaklı değil..`)
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  

};
exports.config = {
  name: 'yasaklı-tag',
  aliases: []
};
