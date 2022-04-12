import * as ds from 'discord.js'
export async function rng(msg:ds.Message<boolean>, args: number[]){
  try {
    let num = args[0]
    let random = Math.floor(Math.random() * num)
    if(num === undefined){
      msg.channel.send('You need to give a maximum number!')
      return  
    }
    switch(args?.[1]) {
        default:
            break
    }
    msg.channel.send(random.toString())
}  
catch(err) {
    msg.reply("Something went wrong while trying to get a random number for SOME reason")
}
}
