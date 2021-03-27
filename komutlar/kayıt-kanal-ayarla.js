  const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`<:a_:821738957997211659>   **Bu komutu kullanabilmek için "\`SUNUCUYU YÖNET\`" yetkisine sahip olmalısın.**`);
  
 if(!kanal) return message.channel.send(`<:a_:821738957997211659>  **Bu Özelliği Ayarlayabilmek İçin Bir Kanal Etiketlemelisin**\n **__Örnek__**: ${prefix}kayıt-kanal-ayarla \`#kayitkanal\``)
 
  message.channel.send(`<:a_:821738957997211659>   **Kayıt kanalı** \`${kanal}\` **olarak ayarlandı!** `)
  db.set(`kayitKanal_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'kayıt-kanal-ayarla', 
  aliases: []
};

