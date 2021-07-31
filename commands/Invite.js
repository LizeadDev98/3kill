exports.run = async (bot,message,args) => {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('Bot Invite: https://discord.com/api/oauth2/authorize?client_id=870654689925038110&permissions=0&scope=bot Support Server: https://discord.gg/MGjbKzGQqS');} else {
            message.channel.send(`Support Server: https://discord.gg/mCPB6YP8wb
            Bot Invite: https://discord.com/api/oauth2/authorize?client_id=870654689925038110&permissions=0&scope=bot ${member.user.tag}`)
        }
}

exports.help = {
    name: 'invite'
}