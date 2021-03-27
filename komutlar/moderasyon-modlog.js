const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:a_:821738957997211659>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`<:a_:821738957997211659>  **Modlog Kanalı Zaten ayarlı değil**`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`<:a_:821738957997211659>  **ModLog Kanalı başarıyla sıfırlandı.**`);
  
    return
  }
  
if (!logk) return message.channel.send(`<:a_:821738957997211659>  **Bir modlog kanalı belirtmelisin.**`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`**Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.**`);
 message.react('607634966959882250')

};

exports.config = {
    name: "modlog",
    aliases: ['mod-log','modlog','log-ayarlama','logayarla','log','vkanal','kayıtkanalı','d']
}