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

function DM(subject, string) {
	subject.sendMessage(string);
	
}


const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
client.on('message', msg => {  
    if (msg.content.includes('Hello Die', 0))      
        {msg.reply('Hello');}
        
        
    if (msg.content.includes('Roll ', 0)) 
    	{msg.reply(Roll(Convert('Roll ',msg.content)));}
    if (msg.content.includes('roll', 0))
    	{msg.reply(Roll(Convert('roll ',msg.content)));}
    	
    	
    if (msg.content.includes( "up up down down left right left right b a" , 0)) 
        {msg.reply('Fuck you ')}
   
   mention = msg.mentions.users.first();
   if (msg.content.startswith( "&&DM", 0)){
   	   if (mention == null) {return;} else
      {msg.delete();
      mentionMessage = msg.split(mention)[1];
      mention.sendMessage(mentionMessage);
       msg.channel.send("Transmission Sent");}
   }})









client.login('NjM3ODM3NTExNjgyNDI0ODMz.XbUB8g.fqnRq_qBQYXQi9uRNygr1nx5Jr0');