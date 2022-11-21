require("dotenv").config(); 
const {Client, Intents}=require("discord.js");
const client=new Client({
    Intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES 
    ]
});
client.once("ready", () =>{
    console.log("Il bot è online"); 
})
client.login(process.env.TOKEN);
//Welcome script
client.on('message',
function (messages){
    if(messages.content.toLocaleLowerCase()==='hello') 
    messages.channel.send('hello' + ' '  + messages.author.username); 
})