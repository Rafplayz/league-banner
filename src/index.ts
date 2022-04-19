import * as ds from 'discord.js'
import 'dotenv/config'
import * as cmds from './cmds'
import { Dirent } from 'fs'
import * as fs from 'fs/promises'
import * as path from 'path'

const envFile = process.env
export const PREFIX = envFile.PREFIX
export const bot = new ds.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES',
    ]
})
const slashCommands: {
    [key: string]: any
} = []

async function getFilesRecursively (directory: string) {
    const output: Dirent[] = []
    const filesInDirectory = await fs.readdir(directory, { withFileTypes: true, encoding: 'utf8' });
    for (const file of filesInDirectory) {
        if (file.isDirectory()) {
            output.push(...await getFilesRecursively((await fs.realpath(directory)) + '/' + file.name));
        } 
        else {
            output.push(file);
        }
    }
    return output
};

bot.login(envFile.TOKEN).then(async () => {
    console.log(`Logged in as ${bot.user.tag}!\n\nTip: press CTRL+C to exit program.\n`)
    bot.user.setPresence({ activities: [{name: 'Your mom', type: 'WATCHING'}], status: 'idle'})
    
})
bot.on('messageCreate',async (msg) => {
    if(msg.author === bot.user || !msg.content.startsWith(PREFIX)) return
    const args = msg.content.slice(1).split(/ +/)
    const command = args.shift().toLowerCase()
    handleMsg(command, msg, args)
})




// login the bot and do initializations


// coolest activity code end right here

export async function handleMsg(command: string, msg: ds.Message<boolean>, args: string[]) {
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
        case 'status':
            cmds.dev.status(msg,bot,args)
            break
        case 'leaguebaninit':
            cmds.main.leagueBanInit(msg,args)
            break
        default:
            msg.channel.send('Command not found!')
            break
    }
}

bot.on("interactionCreate", async interaction => {
    if(!interaction.isButton()) return
    console.log(interaction)
})




export function quickEmbed(title: string, desc?: string, color?: ds.ColorResolvable) {
    return new ds.MessageEmbed()
    .setColor(color ?? "DEFAULT")
    .setFields([
        {
            name: title ?? "Title",
            value: desc ?? " "
        }
    ])
}


