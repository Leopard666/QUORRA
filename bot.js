// ==================================================================

 // THIS BOT [QUORRA] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================

const prefix ="$";
const Discord = require('discord.js');
const client = new Discord.Client();
const ownerid = '480540559233122324'

// ==================================================================

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '2.0';
client.on('message', message => {
    if(message.content.startsWith(prefix + "QUORRA IS BACK ONLINE NOW")) {
    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**🚀 [QUORRA] IS BACK ONLINE NOW & [UPDATED] 🚀** ')
	    .addField('``Bot Version :``' , `[ v2.0 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ] , true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TG - Servers :``', [ client.guilds.size ], true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ $ ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()
	          .setDescription(`**:robot: ● Attention [The Grid™] Users 
[QUORRA] Has Returned From The Darkness Aka Back Online
It Must Be Your Lucky Day ! ● ** `)

    })
}
});

// ==================================================================

client.on('ready', function(){
client.channels.get("542905235241304065").send("$QUORRA IS BACK ONLINE NOW").then(m => m.delete(500));
		   
 });

// ==================================================================

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '2.0';
client.on('message', message => {
    if(message.content.startsWith(prefix + "stats")) {
 if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**[QUORRA] STATS** ')
	    .addField('``Bot Version :``' , `[ v2.0 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ] , true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TG - Servers :``', [ client.guilds.size ] , true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ $ ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()

    })
}
});

// ==================================================================

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setColor('RANDOM')
    .setDescription(`:heart: **شكراً لك لإضافه البوت الى سيرفرك** :heart:`)
    .addField('**● Bot Version** :robot: :' , `**[ v2.0 ]**`)
    .addField('**● Bot CMD** 🔮 :' , `**Use $help For Bot Commands**`)
    .addField('**● Bot Owner** 👑 :' , `**[<@480540559233122324>]**`)
    .addField('**● Bot Name** 🔰 :' , `**[ ${client.user.tag} ]**`)
    .setFooter('🔰 [ THE GRID™ - OFFICIAL ] 🔰')
    .setTimestamp()
        guild.owner.send(embed)
  });

// ==================================================================

client.on('message', message => {
    if(message.content === prefix + "restart") {
	     if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
          client.channels.get("542905235241304065").send({
	     embed: new Discord.RichEmbed()
	    .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('b58900')
	    .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	    .setTimestamp()
            .setTitle('**● :robot: [QUORRA] IS REBOOTING NOW !**')
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		 });
	    console.log(`${message.author.tag} [ ${message.author.id} ] Quorra Has Restarted Successfully.`);
            console.log(`Quorra Is Restarting Now..`);
            setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
            },3000);

}
});
// ==================================================================

client.on('message', message => {
  if (message.content === ('$Quorra')) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .addField('**Bot Ping** 🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
	  .addField('**Bot Version** :robot: :' , `[ v2.0 ]` , true)
          .addField('**Servers** 📚 :', [client.guilds.size], true)
          .addField('**Channels** 📝 :' , `[ ${client.channels.size} ]` , true)
          .addField('**Users** 🔮 :' ,`[ ${client.users.size} ]` , true)
          .addField('**Bot Name** 🔰 :' , `[ ${client.user.tag} ]` , true)
          .addField('**Bot Owner** 👑 :' , `[ <@480540559233122324> ]` , true)
          .setFooter('🔰 [ THE GRID™ - OFFICIAL ] 🔰')
          .setTimestamp()
  })
}
});

// ==================================================================

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
    
   message.channel.send('**:white_check_mark: ● Done , تــــم ارســالك في الخــاص ● :e_mail:**').then(m => m.delete(60000));
   const embed = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .addField('**● BOT - VERSION** :robot: :' , `**[ v2.0 ]**`)
  .addField('**● BOT - OWNER** 👑 :' , `**[ <@480540559233122324> ]**`)
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`**
:rainbow: [❖═══ ● Quorra Rainbow Bot Commands ● ════❖] :rainbow:  
  
❖═════════════════════════════════════❖  

● :signal_strength: : $Quorra :arrow_right: STATS BOT ●

● :rainbow: : $TG :arrow_right: $TG (Role Name) ●

● :books: : سيرفر دعم :arrow_right: https://discord.gg/PzbDJwx ●

❖═════════════════════════════════════❖  

:hearts: [❖═════ ● المزيد قريبا ان شاء الله! ● ═══════❖] :hearts:**`) 

.setFooter('🔰 [ THE GRID™ - OFFICIAL ] 🔰')
.setTimestamp()
message.author.sendEmbed(embed)
  }
});

// ==================================================================

client.colors = {}

//let rainbow = 20;

 client.on("ready", async () => {

  });
    client.setInterval(() =>{

        //adding this so it doesnt start doing weird stuff
        //try to change role color for every server
        for(let i in client.colors) {
            let guildId = client.colors[i].guild;
            let guild = client.guilds.get(guildId);
            let date = client.colors[i].date;


            //if 72 hours have passed, remove from config
            if(date < new Date().getTime() - 259200000) {
                 delete client.colors[i];
                return;
            }

            //if server gets deleted or bot gets kicked, remove from config
            if(guild === null) {
                delete client.colors[i];
                return;
            }
            //try to change the role
            try{
                guild.roles.find(role => role.name === client.colors[i].role).setColor(rainbow[place])
                
                .catch(err => { 
                    delete client.colors[i]
                   
                    return;
                });
            }catch(err){
                delete client.colors[i]
                return;
            }
        }
        	if(place == (size - 1)) {
			place = 0;
		} else {
			place++;
		}
        //Every 10 seconds change it
    }, 2000)


client.on('message', message => {
    var prefix = "$"
  if (!message.content.startsWith(prefix)) return; 
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
    if(command === "TG") {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
	    .setThumbnail(client.user.avatarURL)
            .setAuthor("QUORRA - RAINBOWBOT", client.user.avatarURL)
            .setColor('RANDOM')
            .setDescription("**:warning: You Must Have The Administrator Permission :warning:**")
	    .setFooter('🔰 [ THE GRID™ - OFFICIAL ] 🔰')
	    .addField('QUORRA - VERSION :' , `**[ v1.3 ]**`)
	    .setTimestamp()
            message.channel.send({embed});
            return;
        }

        if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
	    .setThumbnail(client.user.avatarURL)
            .setAuthor("QUORRA - RAINBOWBOT", client.user.avatarURL)
            .setColor('RANDOM')
            .setDescription("**:warning: : I Must Have The Administrator Permission**")
	    .setFooter('🔰 [ THE GRID™ - OFFICIAL ] 🔰')
	    .addField('QUORRA - VERSION :' , `**[ v1.3 ]**`)
	    .setTimestamp()
            message.channel.send({embed});
            return;
        }

		if(!message.member.guild.roles.find(role => role.name === args.join(" "))) {
            const embed = new Discord.RichEmbed()
	    .setThumbnail(client.user.avatarURL)
            .setAuthor("QUORRA - RAINBOWBOT", client.user.avatarURL)
            .setColor('RANDOM')
            .setDescription(":rainbow: Type : **`$TG (Role Name)`** :rainbow:")
	    .setFooter('🔰 [ THE GRID™ - OFFICIAL ] 🔰')
	    .addField('QUORRA - VERSION :' , `**[ v1.3 ]**`)
	    .setTimestamp()
            message.channel.send({embed});
            return;
        }

        if(message.member.guild.roles.find(role => role.name === args.join(" ")) === null) {
            const embed = new Discord.RichEmbed()
	    .setThumbnail(client.user.avatarURL)
            .setAuthor("QUORRA - RAINBOWBOT", client.user.avatarURL)
            .setColor('RANDOM')
            .setDescription(":warning: : **Something Went Wrong** :warning:")
	    .setFooter('🔰 [ THE GRID™ - OFFICIAL ] 🔰')
	    .addField('QUORRA - VERSION :' , `**[ v1.3 ]**`)
	    .setTimestamp()
            message.channel.send({embed});
            return;
        }


        if(message.member.guild.roles.find(role => role.name === args.join(" ")).position >= message.guild.me.highestRole.position) {
            const embed = new Discord.RichEmbed()
	    .setThumbnail(client.user.avatarURL)
            .setAuthor("QUORRA - RAINBOWBOT", client.user.avatarURL)
            .setColor('RANDOM')
            .setDescription(":warning: **Quorra : (RainColor) Role Must Be Higher Than The Mentioned Role !**")
	    .setFooter('🔰 [ THE GRID™ - OFFICIAL ] 🔰')
	    .addField('QUORRA - VERSION :' , `**[ v1.3 ]**`)
	    .setTimestamp()
            message.channel.send({embed});
            return;
        }


        const embed = new Discord.RichEmbed()
        .setAuthor("QUORRA - RAINBOWBOT", client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
        .setColor('RANDOM')
        .setDescription("**:white_check_mark: : Successfully Applied Quorra Rainbow Colors To **`" + args.join(" ") + "`**" + "\n" +
        ":warning: : This Only Lasts (72) Hours, Then it Will Stop Working. You Can Still Apply it Whenever You'd Like !**")
	.setFooter('🔰 [ THE GRID™ - OFFICIAL ] 🔰')
	.addField('QUORRA - VERSION :' , `**[ v1.3 ]**`)
	.setTimestamp()
        message.channel.send({embed});

        client.colors[message.guild.name] = {
            guild: message.guild.id,
            role: args.join(" "),
            date: new Date().getTime()
        }

    }
});


const size    = 12
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
	var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
	var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
	var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg
	rainbow[i] = '#'+ red + green + blue;
}
function sin_to_hex(i, phase) {
	var sin = Math.sin(Math.PI / size * 2 * i + phase);
	var int = Math.floor(sin * 127) + 128;
	var hex = int.toString(16);

	return hex.length === 1 ? '0'+hex : hex;
}
let place = 0;

// ==================================================================

client.on('ready', function(){//npm i ms 
 client.user.setStatus("dnd")
    var ms = 10000 ;
    var setGame = [`★ $help | RainBowBot ★`,`★ SERVERS : [${client.guilds.size}] ★`,`★ THE GRID™ ★`];
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
        client.user.setGame(setGame[i],`https://www.twitch.tv/TheRealPredvkill`);
    }, ms);

});

// ==================================================================

client.login(process.env.BOT_TOKEN);

// ==================================================================

 // THIS BOT [QUORRA] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================
