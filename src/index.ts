import * as ds from 'discord.js'
import 'dotenv/config'
import * as cmds from './cmds'

const envFile = process.env
const PREFIX = envFile.PREFIX
const bot = new ds.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
})

// login the bot and do initializations
bot.login(envFile.TOKEN).then(() => {
    console.log(`Logged in as ${bot.user.tag}!\n\nTip: press CTRL+C to exit program.\n`)
    bot.user.setPresence({
        status: "dnd",
        game: {
            name: "Your mom"
            type: "WATCHING"
        }
    })
})

// coolest activity code end right here
bot.on('messageCreate',async (msg) => {
    if(msg.author === bot.user || !msg.content.startsWith(PREFIX)) return
    const args = msg.content.slice(1).split(/ +/)
    const command = args.shift().toLowerCase()
    handleMsg(command, msg, args)
})
async function handleMsg(command: string, msg: ds.Message<boolean>, args: string[]) {
    switch (command) {
        case 'testembed':
            cmds.dev.testembed(msg)
            break
        
        case '8ball':
            cmds.fun.ball8(msg)
            break
            
        case 'ping':
            cmds.dev.ping(msg)
            break
        case 'getactivity':
            cmds.dev.getactivity(msg)
            break
        default:
            msg.channel.send('Command not found!')
            break
    }
}
