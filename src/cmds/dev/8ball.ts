/**  just saying this is the most amazing 8ball command you will ever see */
import * as ds from 'discord.js'

var answers = ['no lol', 'yeah sure', 'idk lmao', 'what', 'try later', 'maybe /j', '??? lmao i dont have all these answers', 'idk you tell me', 'uh huh', 'probably not sorry...', 'i dont think i asked actually']
var answer = answers[Math.floor(Math.random() * answers.length)];

/** i lied i actually have no idea what im doing but i think this works :thumbs_up: thanks Google */
export async function ping(msg: ds.Message<boolean>) {
    let newmessage = await msg.reply(answer);
}
