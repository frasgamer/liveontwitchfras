const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "*";



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});










const devs = ["307666420743798784"];
client.on('message', message => {
    var argresult = message.content.split(`).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith('(prefix))ply')) {
    client.user.setGame(argresult);
      message.channel.send(:white_check_mark:   ${argresult})
  } else 
     if (message.content === ("leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('(prefix)wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(:white_check_mark:   ${argresult})
  } else 
  if (message.content.startsWith('mils')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(:white_check_mark:   ${argresult})
  } else 
  if (message.content.startsWith('(prefix)st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(:white_check_mark:)
  }
  if (message.content.startsWith('(prefix)setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(Changing The Name To ..${argresult} )
} else
if (message.content.startsWith('(prefix)setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(Changing The Avatar To :${argresult} `);
}
}); 
{





client.login(process.env.BOT_TOKEN);
