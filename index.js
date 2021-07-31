// ODcwNjU0Njg5OTI1MDM4MTEw.YQP6Xg.MyJ4SVgUK65rkUijfS5FYvRL7Uo
// asfhiabwegweg
const Discord = require('discord.js') 
const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}});
const fs = require("fs")
bot.commands = new Discord.Collection();

bot.once('ready', () => {
    bot.user.setActivity('^invite | Invite me to your server today!');
    console.log('Bot Running')
    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js');
        if (jsfile.length <= 0) return console.log("Could not find commands!")

        jsfile.forEach(f => {
            let props = require(`./commands/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '^';
    // hello there ['hello', 'there']
    // !ban user reason ['user', 'reason']
    // Breaking Rules ['breaking', 'rules'] breaking rules
    // hello
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}

})

bot.on('guildMemberUpdate', (oldMember, newMember) => {
    if(oldMember.nickname !== newMember.nickname) {
        newMember.send('You changed your nickname!')
    }
    let oldAvatar = oldMember.user.avatarURL() // https://link.com
    let newAvatar = newMember.user.avatarURL(); // https://link.com
    if(oldAvatar !== newAvatar) {
        newMember.send('Your avatar has changed!')
    }
    
    
})


bot.login("ODcwNjU0Njg5OTI1MDM4MTEw.YQP6Xg.MyJ4SVgUK65rkUijfS5FYvRL7Uo")