const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:a_:821738957997211659>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRM_${message.guild.id}`) 
 if(!rol) return message.reply(`<:a_:821738957997211659>   **Ayarlanmamış bir özellik sıfırlanamaz! :wink: **`)
 
 
  message.channel.send(`<:a_:821738957997211659>   **Otorol mesajı başarılı bir şekilde sıfırlandı.**`)

 
 db.delete(`otoRM_${message.guild.id}`)  

};
exports.config = {
  name: 'otorol-mesaj-sıfırla',
  aliases: ["otorolmesajsıfırla"]
};
