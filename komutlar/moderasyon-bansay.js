const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
   if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:a_:821738957997211659>   **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
 
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(`<:a_:821738957997211659>  **Banlanan Kullanıcı bulunamadı**`)
       .setColor("#ffffff");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle("<:a_:821738957997211659>  Banlistesi | Sunucudan Banlananlar")
       .setColor("#ffffff");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.config = {
  name: 'banlananlar',
  aliases: ["banlılar","banliste", "bansay"]
};

