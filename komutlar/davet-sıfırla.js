const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(`<:a_:821738957997211659>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    return;
  }
  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen daveti sıfırlanacak kişiyi etiketleyiniz!")
        .setColor("RED")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("#ffffff")
    .setDescription(
      `${u} Adlı şahsın davetlerinin sıfırlanmasını onaylıyor musunuz?`
    )
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem onaylandı! ${u} adlı şahsın davetleri sıfırlandı!`
        );
        db.delete(`davet_${u.id}_${message.guild.id}`);
      }
    });
  });
};
module.exports.config = {
  name: "davet-sıfırla",
  aliases: ["davetsıfırla"]
};

