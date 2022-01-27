//herhangi bir boş komut dosyası ile yapmadım 
//kendi komut template nize ekleyiniz.

const promises = [
client.shard.fetchClientValues('guilds.cache.size'),
client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
		];
  Promise.all(promises)
	.then(results => {
		const guildd = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
		const userr = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
const embed = new Discord.MessageEmbed()
.setDescription(`
**• Genel Bilgiler**
Toplam Sunucu Sayısı: ${guildd} 
Toplam Kullanıcı Sayısı: ${userr} 
Shard Id: ${Number(client.shard.ids)+1} / 2
`)
m.channel.send({embeds: [embed]}) 
}) 
