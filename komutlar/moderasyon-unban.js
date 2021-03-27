const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  
  const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
    
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:a_:821738957997211659>   **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<:a_:821738957997211659>  **Mod Log Kanalı Ayarlanmamış | ${prefix}modlog #kanal**`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
 if (isNaN(user)) return message.channel.send('<:a_:821738957997211659>  **Lütfen Banını Açmak İstediğiniz Üyeninin ID sini Girin**');
  if (reason.length < 1) return message.channel.send('<:a_:821738957997211659>  **Lütfen Sebep Giriniz**');
 
  
  const embed = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .addField('<:a_:821738957997211659>  İşlem', 'Ban Kaldırma')
  .addField('<:a_:821738957997211659>  Banı Açılan Üye', `(${user})`)
  .addField('<:a_:821738957997211659>  Banı Açan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<:a_:821738957997211659>  Banı Açma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  message.guild.members.unban(user);
  

  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setDescription(`<:a_:821738957997211659>  Belirtiğiniz İD'nin Banı Açıldı`)
  message.channel.send(embed2)

  
};

exports.config = {
  name: 'unban',
  aliases: ['unban','yasak-kaldır','yasak-aç','ban-kaldır']
};
