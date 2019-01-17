const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});










const adminprefix = "F";
const devs = ['486701400152342528','307666420743798784'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'play')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'name')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'streaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//wennnn
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});




client.login(process.env.BOT_TOKEN);
