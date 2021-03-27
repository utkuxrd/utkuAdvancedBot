const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');
const ayarlar = require('../ayarlar/bot.json');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {

  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      
let shardinfo = {
        ping: await client.shard.fetchClientValues('ping'),
        server_count: await client.shard.fetchClientValues('guilds.size'),
        user_count: await client.shard.fetchClientValues('users.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = client.shard.id
    let shardembed = new Discord.MessageEmbed()
    .setTitle('Shard İstatistik')
    .setColor("#ffffff")
    .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
    
    for(i=0;i<client.shard.count;i++) {
        shardembed.addField(`<:a_:821738957997211659>  **Shard ${i}**`, `<:a_:821738957997211659>   **Ping:** ${Math.round(shardinfo.ping[i])}ms\n<:a_:821738957997211659>   **Sunucu:** ${shardinfo.server_count[i]}\n <:a_:821738957997211659>  **Kullanıcı:** ${shardinfo.user_count[i]}\n <:a_:821738957997211659>  **Uptime:** ${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)} \n <:a_:821738957997211659>  **Bu Sunucunun Shardı Id'si**: ${client.shard.id}`, true)
    }
    message.channel.send(shardembed)
}
exports.config = {
  name: "shard",
  aliases: []
};
