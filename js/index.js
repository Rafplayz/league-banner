import * as ds from 'discord.js';
import 'dotenv/config';
const envFile = process.env;
const PREFIX = envFile.PREFIX;
const bot = new ds.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS'
    ]
});
bot.login(envFile.TOKEN);
async function handleMsg(command, msg, args) {
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
            });
            break;
        case 'ping':
            let start = Date.now();
            let latency = msg.createdAt - start;
            let embed = new ds.MessageEmbed()
                .setFields([
                { name: "API Info Receive Latency", value: `${latency}ms` },
                { name: "API Total Latency", value: "Calculating" }
            ]);
            let newmessage = await msg.reply({ embeds: [embed] });
            await newmessage.edit({
                embeds: [new ds.MessageEmbed()
                        .setFields([
                        { name: "API Info Receive Latency", value: `${latency}ms` },
                        { name: "API Total Latency", value: `${newmessage.createdAt.getTime() - start}ms` },
                    ])]
            });
            break;
    }
}
