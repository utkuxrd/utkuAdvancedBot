const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


  const db = require('quick.db');
  

  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('<:a_:821738957997211659>  **Gerekli izniniz bulunmuyor**')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<:a_:821738957997211659>  **Mod Log Kanalı Ayarlanmamış Ayarlamak için  | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<:a_:821738957997211659>  **Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<:a_:821738957997211659>   **Kickleme Sebebinizi Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<:a_:821738957997211659>  **Kendini Kickleyeceğine Kendin Çıksana ?**');

  const embed = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .addField('<:a_:821738957997211659>  İşlem', 'Sunucudan Kickleme')
  .addField('<:a_:821738957997211659>  Kicklenen Üye', `${user.tag} (${user.id})`)
  .addField('<:a_:821738957997211659>  Kickleyen Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<:a_:821738957997211659>  Kick Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setDescription(`<:a_:821738957997211659>  **Kullanıcı Başarıyla Kicklendi**`)
  message.channel.send(embed2)
  
};

exports.config = {  
  name: 'at',
  aliases: ['kick']
 
};

