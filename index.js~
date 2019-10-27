function Roll(n) {
return (1 + Math.floor(n * Math.random()));}

function Convert(spliter, string) {
	return parseInt(string.split(spliter)[1])
}



const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
client.on('message', msg => {  
    if (msg.content.includes('Hello Die', 0)) {     
        msg.reply('Hello');}
    if (msg.content.includes('Roll ', 0)) {
    	msg.reply(Roll(Convert('Roll ',msg.content)));}
    if (msg.content.includes('roll', 0)) {
    	msg.reply(Roll(Convert('roll ',msg.content)));}
    if (msg.content.includes( "up up down down left right left right b a" , 0)) 
       {msg.reply('Fuck you ')}
})
client.login('NjM3ODM3NTExNjgyNDI0ODMz.XbUB8g.fqnRq_qBQYXQi9uRNygr1nx5Jr0');