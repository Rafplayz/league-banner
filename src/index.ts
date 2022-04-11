// test2
import * as ds from 'discord.js'
import 'dotenv/config'


const envFile = process.env
const PREFIX = envFile.PREFIX
const bot = new ds.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS'
    ]
})

bot.login(envFile.TOKEN)
.then(() => {
    console.log(`Logged in as ${bot.user.tag}!\n\nTip: press CTRL+C to exit program.\n`)
})
bot.on('messageCreate',async (msg) => {
    if(msg.author === bot.user) return
    if(!msg.content.startsWith(PREFIX)) return
    const args = msg.content.slice(1).split(/ +/)
    const command = args.shift().toLowerCase()
    handleMsg(command, msg, args)
})
async function handleMsg(command: string, msg: ds.Message<boolean>, args: string[]) {
    switch (command) {
    case 'testembed':
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
                ])
            ]
        })
        break

    case 'ping':
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
        break
    }
}