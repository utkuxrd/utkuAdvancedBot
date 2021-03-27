const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  message.channel.send(`<:a_:821738957997211659>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

    return;
  }
  let kanal = await db.fetch(`davetkanal_${message.guild.id}`)
  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Davet kanalı zaten ayarlanmamış!")
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("RED")
    );
  }
  db.delete(`davetkanal_${message.guild.id}`)
  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`Davet kanalı başarıyla sıfırlandı!`);
  message.channel.send(embed);
return
  
};
module.exports.config = {
  name: "davet-kanal-sıfırla",
  aliases: ["davetkanalsıfırla"]
};

