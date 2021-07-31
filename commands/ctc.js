exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.channel.send("No member found!");
    let role = await message.guild.roles.create({
        data: {
          name: 'Private Txt Channel',
          color: 'RED',
        }
      })

    let channel = await message.guild.channels.create(`${message.author.username}-${member.user.username}`, {
        type: 'text',
        permissionOverwrites: [
            {
                id: role.id,
                allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
            },
            {
                id: message.guild.roles.everyone.id,
                deny: ['SEND_MESSAGES', 'VIEW_CHANNEL']
            }
        ]
    })

    member.roles.add(role);
    message.member.roles.add(role);
    message.channel.send(`Channel has been created! Get talking at ${channel}, Mods and admins note that you will have to delete the role and text channel after the users are done with the channel
    User the command ^invite to invite the bot to your server or to join the support server`)
}

exports.help = {
name: 'ctc'
}