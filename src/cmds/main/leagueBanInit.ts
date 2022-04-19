import * as ds from 'discord.js'
export async function leagueBanInit(msg:ds.Message<boolean>, args: string[]) {
    // check if user has admin permission
    if(!msg.member.permissions.has('ADMINISTRATOR')) {
        msg.channel.send('You do not have permission to use this command!')
        return
    }
    // ask if bot should log messages and expect a yes or no answer
    // use a button row
    const embed = new ds.MessageEmbed()
    .setColor('DEFAULT')
    .setTitle('Should the bot log bans?')
    .setDescription('This will log all bans to a channel.')

    // send the embed with yes and no buttons
    const msg2 = await msg.reply({
        embeds: [embed],
        components: [new ds.MessageActionRow()
            .addComponents([
                new ds.MessageButton()
                    .setLabel('Yes')
                    .setStyle('PRIMARY')
                    .setCustomId('yesLog')
                ,
                new ds.MessageButton()
                    .setLabel('No')
                    .setStyle('DANGER')
                    .setCustomId('noLog')

            ])
        ],
    })


}