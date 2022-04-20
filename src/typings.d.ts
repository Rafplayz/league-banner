import * as ds from 'discord.js'
interface Bot extends ds.Client {
    slashcommands: {
        [key: string]: any
    }
}