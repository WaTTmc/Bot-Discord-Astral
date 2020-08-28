bot.on('message', message => {
    if (message.content === 'Servenr on?') {
      message.reply('Serveur en Maintenance !')
    }
})

  bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur Astral ' + member.displayName)
    }).catch(console.error)
})

bot.on('message', message => {

    if (message.content.startsWith(prefix + 'play')) {
      let voiceChannel = message.guild.channels
        .filter(function (channel) { return channel.type === 'voice' })
        .first()
      let args = message.content.split(' ')
      voiceChannel
        .join()
        .then(function (connection) {
          let stream = YoutubeStream(args[1])
          stream.on('error', function () {
            message.reply("Je n'ai pas réussi à lire cette vidéo :(")
            connection.disconnect()
        })
          connection
            .playStream(stream)
            .on('end', function () {
              connection.disconnect()
            })
        })
    }
  
  })
