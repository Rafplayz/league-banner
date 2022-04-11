import * as ds from 'discord.js'

export async function ping(msg: ds.Message<boolean>) {
    let embed = new ds.MessageEmbed()
        .setThumbnail(msg.author.avatarURL())
        .setTitle("the bopt")
        .setDescription('cool bot :)))')
        .setDescription('raf wont let me put a version variable because raf doesnt like fun and also likes to put the env file in gitignore')   
}