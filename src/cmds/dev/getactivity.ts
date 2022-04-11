import * as ds from 'discord.js'

export async function getactivity(msg: ds.Message<boolean>) {
    let author = await msg.guild.members.fetch(msg.author.id)

    // get author's activity
    let activities = author.presence?.activities
    let embed = new ds.MessageEmbed()

    if(activities === null) {
        embed.setTitle('No activities found')
    }
    else activities.forEach((activity,index) => {
        embed.addField('Activity ' + (index+1), activity.name)
    })

    msg.channel.send({ embeds: [embed] })
}