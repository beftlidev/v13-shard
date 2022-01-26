const Discord = require('discord.js')
const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./space-giveaway.js", {
    token: '',
    totalShards: 2,
});
const webhook_id = ''
const webhook_token = ''
manager.on('shardCreate', async(i) => {
console.log(`${i.id} / 2 Id' li Shard kullanıma hazır!`)
const shardlog = new Discord.WebhookClient(webhook_id, webhook_token);
const embed = new Discord.MessageEmbed() 
.setDescription(`<:sgs_tick:921392926683197460> **${i.id} / 2** Id' li Shard kullanıma hazır!`)
.setFooter(`Space Giveaway`, client.user.avatarURL())
.setColor('GREEN')
shardlog.send({embeds: [embed]});
})
manager.on('shardDisconnect', async(i) => {
const embed = new Discord.MessageEmbed() 
.setDescription(`<:sgs_error:921392927568195645> **${i.id} / 2** Id' li Shard' ın bağlantısı kesildi!`)
.setFooter(`Space Giveaway`, client.user.avatarURL())
.setColor('GREEN')
shardlog.send({embeds: [embed]});
})
manager.on('shardReconnecting', async(i) => {
const embed = new Discord.MessageEmbed() 
.setDescription(`<:sgs_tick:921392926683197460> **${i.id} / 2** Id' li Shard yeniden bağlandı!`)
.setFooter(`Space Giveaway`, client.user.avatarURL())
.setColor('GREEN')
shardlog.send({embeds: [embed]});
})
manager.spawn();
