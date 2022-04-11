import * as ds from 'discord.js';
import 'dotenv/config';
import * as cmds from './cmds';
const envFile = process.env;
const PREFIX = envFile.PREFIX;
const bot = new ds.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS'
    ]
});
bot.login(envFile.TOKEN)
    .then(() => {
    console.log(`Logged in as ${bot.user.tag}!\n\nTip: press CTRL+C to exit program.\n`);
});
// coolest activity code right here
bot.user.setActivity('your mom', { type: 'PLAYING' });
// coolest activity code end right here
bot.on('messageCreate', async (msg) => {
    if (msg.author === bot.user || !msg.content.startsWith(PREFIX))
        return;
    const args = msg.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();
    handleMsg(command, msg, args);
});
async function handleMsg(command, msg, args) {
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
    }
}
