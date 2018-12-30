const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', function(){	
    var ms = 40000 ;	
    var setGame = ['by Fras#9999','يستطيع الشيطان أن يكون ملاكاً . . والقزم عملاقاً . . والخفاش نسراً.. والظلمات نوراً . . لكن أمام الحمقى والسذج فقط'];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});

client.login(process.env.BOT_TOKEN);
