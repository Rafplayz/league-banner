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
        var start_timestamp = activity.timestamps?.start
        var end_timestamp = activity.timestamps?.end

        if(end_timestamp === null || end_timestamp === undefined) {
            var d = "Not set"
        }else{
            var d = end_timestamp.toString()
        }

        if(start_timestamp === null || start_timestamp === undefined) {
            var t = "Not set"
        }else{
            var t = start_timestamp.toString()
        }

        embed.addField('Activity ' + (index+1), activity.name)
        embed.addField('Type', activity.type)
        embed.addField('Starting Timestamp ', t)
        embed.addField('End TimeStamp ', d)
    })

    msg.channel.send({ embeds: [embed] })
}