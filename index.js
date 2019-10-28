function Roll(n) {
return (1 + Math.floor(n * Math.random()));}

function Convert(spliter, string) {
	return parseInt(string.split(spliter)[1])
}

function NumToLettBad(n) {
if (n === 1) {return 'A'} else
if (n === 2) {return 'B'} else
if (n === 3) {return 'C'} else
if (n === 4) {return 'D'}}



const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
client.on('message', msg => {
	const msgsave = msg;
		
    if (msg.content.includes('Hello Die', 0))      
        {msg.reply('Hello');}
        
        
    if (msg.content.includes('Roll ', 0)) 
    	{msg.reply(Roll(Convert('Roll ',msg.content)));}
    if (msg.content.includes('roll', 0))
    	{msg.reply(Roll(Convert('roll ',msg.content)));}
    	
    	
    if (msg.content.includes( "up up down down left right left right b a" , 0)) 
        {msg.reply('Fuck you ')}

   if (msg.content.includes( "Chameleon",0)) {
   	   var msg1 = msg.split(" ")[1];
   	   var user1 = msg.mentions.users.first();
   	   var msg2 = msg.split(" ")[2];
   	   var user2 = msg2.mentions.users.first();
   	   msg.reply("hello " + user2);
   }
   	   
   })









client.login('NjM3ODM3NTExNjgyNDI0ODMz.XbUB8g.fqnRq_qBQYXQi9uRNygr1nx5Jr0');