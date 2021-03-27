const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Lord Creative - Komut Sayısı`)
    .setDescription('**\n Lord Creative Bot | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("#ffffff")
    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
    .setTimestamp()
    .setFooter("Lord Creative | Gelişmiş Türkçe Bot | 2020" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

