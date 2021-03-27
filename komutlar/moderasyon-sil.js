const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:a_:821738957997211659>  **Bu Komutu Kullanmak İçin İzniniz Yok**");
if(!args[0]) return message.channel.send("<:a_:821738957997211659>   **Lütfen Silinicek Mesaj Miktarını Yazın!** ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<:a_:821738957997211659>  **${args[0]}** **Adet Mesajı Sildim**`)
})
}

exports.config = {
name: "temizle",
aliases: ["sil"]
};