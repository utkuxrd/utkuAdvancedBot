const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let kişicikabi = message.mentions.users.first() || message.author
 let avatarcım = new Discord.MessageEmbed()
  
  .setImage(kişicikabi.avatarURL())
  
  message.channel.send(avatarcım)
  
  };
exports.config = {
name: "avatar",
aliases: [""]
}