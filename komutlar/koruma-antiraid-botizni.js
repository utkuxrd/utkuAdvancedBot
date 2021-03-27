const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:a_:821738957997211659>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  if (db.has(`antiraidK_${message.guild.id}`) === false) {
    return message.channel.send(
      "Anti-raid açılmamış. Açmak için **-anti-raid aç**"
    );
  }
  if (!args[1]) return message.reply("Lütfen bir bot id si girin");
 
  if (isNaN(args[1])) {
    return message.reply("Sadece ID");
  }
  if (args[0] == "ver") {
    client.users.get(args[0]);
    db.set(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + "ID li bota izin verildi");
  }
  if (args[0] == "kaldır") {
    db.delete(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + " ID li botun izni kaldırıldı");
  }
};
exports.config = {
  name: "bot-izni",
  aliases: []
};

 