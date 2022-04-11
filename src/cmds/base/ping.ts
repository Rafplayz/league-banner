import * as ds from 'discord.js'
export default async function(msg: ds.Message<boolean>) {
    let start = Date.now()
    let latency = <number><unknown>msg.createdAt - start
    let embed = new ds.MessageEmbed()
        .setFields([
            { name: "API Info Receive Latency", value: `${latency}ms` },
            { name: "API Total Latency", value: "Calculating" }
        ])
    let newmessage = await msg.reply({ embeds: [embed] })
    await newmessage.edit({
            embeds: [new ds.MessageEmbed()
                .setFields([
                    { name: "API Info Receive Latency", value: `${latency}ms` },
                    { name: "API Total Latency", value: `${newmessage.createdAt.getTime() - start}ms` },
                ])]
        })
}