const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const ytdl = require('ytdl-core');
const fs = require("fs");
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyDBw-N9o0-48I01ic6Y-O3ncImWFGJUjKo");
const queue = new Map();
const gif = require("gif-search");


let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));

let prefix = '!a';

client.on('ready', function () {
  console.log("Je suis lancée !")
  client.user.setStatus("dnd")
  client.user.setActivity("se faire dev par WaTT_mc")
})

client.login(config.token);

client.on('message', message => {
  if (message.content === 'WaTT_mc') {
    message.reply('Merci de ne pas mentioner un fonda ( risque de sanction ) !')
  }
})

//commande serveur on//

client.on('message', message => {
    if (message.content === 'Server on?') {
      message.reply('Serveur en Maintenance !')
    }
})

client.on('message', message => {
  if (message.content === 'Serveur on?') {
    message.reply('Serveur en Maintenance !')
  }
})


// fin commande server on //

//message de bienvenue//
client.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur Astral ' + member.displayName)
    }).catch(console.error)
})
// kick //

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!akick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Raison optionel ')
            .then(() => {
              message.reply(`Tu la bien kick${user.tag}`);
            })
            .catch(err => {
              message.reply('Tu ne peux pas kick ');
                console.error(err);
            });
        } else {
          message.reply("Se personnage n'est pas staff! ");
        }
      } else {
        message.reply("Tu n'as mention personne! ");
      }
    }
  });
  // compteur //

  client.on('message', message => {
    if (message.content === "!a") {
        message.reply("**10**")
        setTimeout(suiteTraitement, 1000)
        message.reply("**9**")
        setTimeout(suiteTraitement, 1000)
        message.reply("**8**")
        setTimeout(suiteTraitement, 1000)
        message.reply("**7**")
        setTimeout(suiteTraitement, 1000)
        message.reply("**6**")
        setTimeout(suiteTraitement, 1000)
        message.reply("**5**")
        setTimeout(suiteTraitement, 1000)
        message.reply("**4**")
        setTimeout(suiteTraitement, 1000)
        message.reply("**3**")
        setTimeout(suiteTraitement, 1000)
        message.reply("**2**")
        setTimeout(suiteTraitement, 1000)
        message.reply("**1**")
        setTimeout(suiteTraitement, 1000)
        message.reply("**GO**")
    }
})
// roll //
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

client.on('message', message => {
  if (message.content === '!aroll') {
    message.reply(getRandomInt(100));
  }
})

// music //


// nuke //

client.on('message', message => {
  if (message.content === prefix + 'nukeeeeeeeeeee') {
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
      message.reply('@everyone vous etes tous des fils de pute')
  }
})
    

//ban//
client.on('message', message => {
  if (message.content === prefix + 'ban') {
      message.reply('')
}
})

//level//

client.on("message", message => {
  if (message.author.bot) return;

  if (!db[message.author.id]) db[message.author.id] = {
      xp: 0,
      level: 0
    };
  db[message.author.id].xp++;
  let userInfo = db[message.author.id];
  if(userInfo.xp > 100) {
      userInfo.level++
      userInfo.xp = 0
      message.reply("GG tu level up")
  }
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if(cmd === "info") {
      let userInfo = db[message.author.id];
      let member = message.mentions.members.first();
      let embed = new Discord.RichEmbed()
      .setColor(0x4286f4)
      .addField("Level", userInfo.level)
      .addField("XP", userInfo.xp+"/100");
      if(!member) return message.channel.sendEmbed(embed)
      let memberInfo = db[member.id]
      let embed2 = new Discord.RichEmbed()
      .setColor(0x4286f4)
      .addField("Level", memberInfo.level)
      .addField("XP", memberInfo.xp+"/100")
      message.channel.sendEmbed(embed2)
  }
  fs.writeFile("./database.json", JSON.stringify(db), (x) => {
      if (x) console.error(x)
    });
})

client.on('message', message => {
  if (message.content === '!arank') {
    message.reply(userInfo.level);
  }
})


//level//
// mdp gen//


function makeid() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@";

  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

client.on('message', message => {
  if (message.content === '!agen') {
    message.reply(makeid(10));
  }
})

function genc() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@";

  for (let i = 0; i < 18; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

client.on('message', message => {
  if (message.content === '!agenc') {
    message.reply(genc(10));
  }
})

//mdp gen//

//anti insulte  //

client.on('message', message => {
  if (message.content === 'fils de pute') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'fdp') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'con') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'connar') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'conard') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'connard') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'fuck') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'baise') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'je te baisse') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'ntm') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'nique ta mere') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'pornhub') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'chien') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'sale chien') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'koro') {
    message.reply("Merci de corriger votre language !");
  }
  else if (message.content === 'neyzox') {
    message.reply("Merci de corriger votre language !");
  }
})

// en dev // 

//help//


client.on('message', message => {
  if (message.content === '!ahelp') {
    message.reply("```!akick kick un joeur \n \n !aban Ban un joueur \n \n !aroll Roll un nombre aléatoire \n \n !agen générer un mot de passe simple \n \n !agenc générer un mot de passe compliqué \n \n !aplay jouer de la music \n \n !astop stoper la music \n \n !askip passer la music \n \n le reste a venir```");
  }
})
//help//

// reaction role //



// reaction role //

// ban //

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!aban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban('Raison optionel ')
          .then(() => {
            message.reply(`Tu la bien ban${user.tag}`);
          })
          .catch(err => {
            message.reply('Tu ne peux pas ban ');
              console.error(err);
          });
      } else {
        message.reply("Se personnage n'est pas staff! ");
      }
    } else {
      message.reply("Tu n'as mention personne! ");
    }
  }
});

//ban//

// dev music  //

client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
    
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (message.content === '!play') {
		const voiceChannel = msg.member.voiceChannel;
        
        if (!voiceChannel) return msg.channel.send("I can't find you in any voice channel!");
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        
        if (!permissions.has('CONNECT')) {

			return msg.channel.send("I don't have enough permissions to join your voice channel!");
        }
        
		if (!permissions.has('SPEAK')) {

			return msg.channel.send("I don't have enough permissions to speak in your voice channel!");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.sendMessage("I don't have enough permissions to insert a URLs!")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#f7abab")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
/////////////////					
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No one respone a number!!');
                    }
                    
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send("I didn't find any results!");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
        
	} else if (message.content === '!askip') {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to skip!!");

		serverQueue.connection.dispatcher.end('Ok, skipped!');
        return undefined;
        
	} else if (message.content === '!astop') {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Ok, stopped & disconnected from your Voice channel');
        return undefined;
        
	} else if (message.content === '!avol') {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
		if (!serverQueue) return msg.channel.send('You only can use this command while music is playing!');
        if (!args[1]) return msg.channel.send(`The bot volume is **${serverQueue.volume}**`);
        
		serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        
        return msg.channel.send(`Volume Now is **${args[1]}**`);

	} else if (message.content === '!anp') {

		if (!serverQueue) return msg.channel.send('There is no Queue!');
		const embedNP = new Discord.RichEmbed()
	    .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
        
	} else if (message.content === '!aqeue') {
		
		if (!serverQueue) return msg.channel.send('There is no Queue!!');
		let index = 0;
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle("The Queue Songs :")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("#f7abab")
		return msg.channel.sendEmbed(embedqu);
	} else if (message.content === '!apause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Ok, paused');
		}
		return msg.channel.send('There is no Queue to Pause!');
	} else if (message.content === '!aresume') {

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send('Ok, resumed!');
            
		}
		return msg.channel.send('Queue is empty!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}!`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Can't join this channel: ${error}!`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`**${song.title}**, just added to the queue! `);
	} 
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
}


client.on('message', message => {
    if (message.content === '!ahelpmusic') {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('****')
        .setDescription('**(!)**')
        .addField('!aplay', '')
        .addField('!ajoin', '')
        .addField('!adisconnect', '')
        .addField('!askip', )
        .addField('!apause', '')
        .addField('!aresume', '')
        .addField('!aqueue', '')
        .addField('!anp', '')
        .setFooter('(general_commands) ')
      message.channel.send(helpEmbed);
    }
});

// dev music //