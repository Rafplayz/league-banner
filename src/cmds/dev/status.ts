import * as ds from 'discord.js'
export async function status(msg:ds.Message<boolean>,client:ds.Client<true>,args: string[]) {
    try {
        // set the bot's status to the first argument
        let status = args[0]
        if(status === undefined) {
            msg.channel.send('Please specify a status!')
            return
        }
        switch(args?.[1]) {
            // set the activity status depending on argument
            case 'playing':
            case 'play':
                client.user.setActivity(status, {type: 'PLAYING'})
                break
            case 'watching':
            case 'watch':
                client.user.setActivity(status, {type: 'WATCHING'})
                break
            case 'listening':
            case 'listen':
                client.user.setActivity(status, {type: 'LISTENING'})
                break
            case 'streaming':
            case 'stream':
                client.user.setActivity(status, {type: 'STREAMING', url: 'https://www.twitch.tv/'})
                break
            default:
                throw new Error("Invalid status type!")
        }
        client.user.setActivity({name: status})

    }
    catch(err) {
        msg.reply("There was an error with your status change. Reason: " + err)
    }
}