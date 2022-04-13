import * as ds from 'discord.js';
import 'dotenv/config';
import * as cmds from './cmds';
const envFile = process.env;
export const PREFIX = envFile.PREFIX;
export const bot = new ds.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES',
    ]
});
bot.on('messageCreate', async (msg) => {
    if (msg.author === bot.user || !msg.content.startsWith(PREFIX))
        return;
    const args = msg.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();
    handleMsg(command, msg, args);
});
bot.on('presenceUpdate', async (OldPres, NewPres) => {
    let isPlayingLeague = false;
    NewPres.activities?.forEach(activity => {
        if (activity.name.includes('League of Legends'))
            isPlayingLeague = true;
    });
    if (isPlayingLeague) {
        console.log(NewPres.user.username + ' is playing League of Legends');
    }
});
// login the bot and do initializations
bot.login(envFile.TOKEN).then(() => {
    console.log(`Logged in as ${bot.user.tag}!\n\nTip: press CTRL+C to exit program.\n`);
    bot.user.setPresence({ activities: [{ name: 'Your mom', type: 'WATCHING' }], status: 'idle' });
});
// coolest activity code end right here
export async function handleMsg(command, msg, args) {
    switch (command) {
        case 'testembed':
            cmds.dev.testembed(msg);
            break;
        case '8ball':
            cmds.fun.ball8(msg);
            break;
        case 'ping':
            cmds.dev.ping(msg);
            break;
        case 'getactivity':
            cmds.dev.getactivity(msg);
            break;
        case 'status':
            cmds.dev.status(msg, bot, args);
            break;
        default:
            msg.channel.send('Command not found!');
            break;
    }
}
