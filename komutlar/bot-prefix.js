const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
let a = ayarlar.prefix
    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`<:a_:821738957997211659>  **Bu Komutu Kullanabilmek İçin Mesajları Yönet Yetkisine Sahip Olmalısınız** | **Şuanki Prefix:** ${p}`));
  
if(args[0] === "ayarla") {
if(o) { return message.channel.send(new Discord. MessageEmbed()
                                         .setColor("#ffffff")
.setDescription(`**Ayarlanmış Şeyi Tekrar Ayarlıyamassın | Şuanki Prefix:** ${p} **Sıfırlamak İçin** ${p}**prefix sıfırla**`));
      }
if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("#ffffff")
.setDescription(`<:a_:821738957997211659>   **Bir Prefix Girip Tekrar Dene |  Şuanki Prefix:** ${p}`));
db.set(`prefix.${message.guild.id}`, args[1])
message.channel.send(new Discord.MessageEmbed()
                          .setColor("#ffffff")
.setDescription(`<:a_:821738957997211659>   **Prefix Başarıyla Ayarlandı | Şuanki Prefix:** ${args[1]}`));
}
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("#ffffff")
.setDescription(`<:a_:821738957997211659>  **Ayarlanmayan Prefixi Sıfırlayamazsınız | Şuanki Prefix:** ${p}`));
    }
    db.delete(`prefix.${message.guild.id}`)       
   return message.channel.send(new Discord.MessageEmbed()
                                    .setColor("#ffffff")
.setDescription(`<:a_:821738957997211659>  **Prefix Başarıyla Sıfırlandı | Şuanki Prefix:** ${a}`));
  }
 
 if(!args[0]) return message.channel.send(new Discord.MessageEmbed()     
                  .setColor("#ffffff")                             
.setDescription(`<:a_:821738957997211659>  **Prefix Ayarlamak İçin** ${p}**prefix ayarla <prefix>**\n <:a_:821738957997211659>  **Sıfırlamak İçin** ${p}**prefix sıfırla | Şuanki Prefix:** \`${p}\``));
  
};
exports.config = {
name: "prefix",
aliases: ['p']
};