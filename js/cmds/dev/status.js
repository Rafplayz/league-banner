import * as ds from 'discord.js';
const bot = ds.Client;
export async function status(msg) {
    let msgcontent = await msg.content;
    msgcontent = msg.content.replace('~status ', '');
}
