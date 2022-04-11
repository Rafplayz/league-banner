import * as ds from 'discord.js'
export async function testembed(msg: ds.Message<boolean>) {
    msg.reply({
        embeds: [new ds.MessageEmbed()
            .setTitle('Title')
            .setColor('RED')
            .setThumbnail(msg.author.avatarURL())
            .setImage(msg.guild.iconURL())
            .setTimestamp()
            .setDescription('Description')
            .setFields([
                { name: "Field 1", value: "Field 1 Value" },
                { name: "Field 2", value: "Field 2 Value" },
                { name: "Field 1 Inline", value: "Field 1 Inline Value", inline: true },
                { name: "Field 2 Inline", value: "Field 2 Inline Value", inline: true }
        ])]
    })
}
