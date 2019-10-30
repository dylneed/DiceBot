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
		
    if (msg.content.includes('Hello Die', 0))      
        {msg.reply('Hello');}
        
        
    if (msg.content.startsWith('Roll ', 0)) 
    	{msg.reply(Roll(Convert('Roll ',msg.content)));}
    if (msg.content.includes('roll', 0))
    	{msg.reply(Roll(Convert('roll ',msg.content)));}
    	
    	
    if (msg.content.includes("up up down down left right left right b a" , 0)) 
        {msg.reply('Fuck you ')}

   if (msg.content.startsWith("Whisper",0)) {
   	  user = msg.mentions.members.first();
   	  str = msg.content;
   	  out = str.split(">")[1];
   	  user.send(" " + out);
   	  msg.delete();
   }
   
   if (msg.content.startsWith("Chameleon")) {
   	   // syntax: Chameleon <#> <@user1> ... <@user#>
   	   str  = msg.content;
   	   tile = NumToLettBad(4) + Roll(4);
   	   cham = "You are the Chameleon"
   	   num  = str.split(" ").length - 1;
   	   deal = Roll(num);
   	   if (num < 3) {msg.reply("That's not enough people silly")} else
   	   if (num == 3) {
   	   	   if (deal == 1) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   } else
   	   	   if (deal == 2) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   } else
   	   	   if (deal == 3) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + cham);
   	   	   }
   	   }
   	   if (num == 4) {
   	   	   if (deal == 1) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile)
   	   	   } else
   	   	   if (deal == 2) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	       client.channels.get(`615967798488858624`).send(
   	   	       	   "Whisper" + str.split(" ")[4] + tile);
   	   	   } else
   	   	   if (deal == 3) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   } else
   	   	  if (deal == 4) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + cham);
   	   	   } 
   	   } else
   	   if (num == 5) {
   	   	   if (deal == 1) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   } else
   	   	   if (deal == 2) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	       client.channels.get(`615967798488858624`).send(
   	   	       	   "Whisper" + str.split(" ")[4] + tile);
   	   	       client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   } else
   	   	   if (deal == 3) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   } else
   	   	  if (deal == 4) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   } else
   	   	   if (deal == 5) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + cham);
   	   	   }
   	   } else
   	   if (num == 6) {
   	   	   if (deal == 1) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile); 
   	   	   } else
   	   	   if (deal == 2) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	       client.channels.get(`615967798488858624`).send(
   	   	       	   "Whisper" + str.split(" ")[4] + tile);
   	   	       client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile); 
   	   	   } else
   	   	   if (deal == 3) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile); 
   	   	   } else
   	   	  if (deal == 4) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile); 
   	   	   } else
   	   	   if (deal == 5) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile); 
   	   	   } else
   	   	   if (deal == 6) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + cham);
   	   	   }
   	   } else
   	   if (num == 7) {
   	   	   if (deal == 1) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   } else
   	   	   if (deal == 2) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	       client.channels.get(`615967798488858624`).send(
   	   	       	   "Whisper" + str.split(" ")[4] + tile);
   	   	       client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   } else
   	   	   if (deal == 3) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   } else
   	   	  if (deal == 4) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   } else
   	   	   if (deal == 5) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   } else
   	   	   if (deal == 6) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   }
   	   	   if (deal == 7) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + cham);
   	   	   }
   	   } else
   	   if (num == 8) {
   	   	   if (deal == 1) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[8] + tile);
   	   	   } else
   	   	   if (deal == 2) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	       client.channels.get(`615967798488858624`).send(
   	   	       	   "Whisper" + str.split(" ")[4] + tile);
   	   	       client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[8] + tile);
   	   	   } else
   	   	   if (deal == 3) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[8] + tile);
   	   	   } else
   	   	  if (deal == 4) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[8] + tile);
   	   	   } else
   	   	   if (deal == 5) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[8] + tile);
   	   	   } else
   	   	   if (deal == 6) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[8] + tile);
   	   	   }
   	   	   if (deal == 7) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + cham);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[8] + tile);
   	   	   }
   	   	   if (deal == 8) {
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[1] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[2] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[3] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[4] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[5] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[6] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[7] + tile);
   	   	   	   client.channels.get(`615967798488858624`).send(
   	   	   	   	   "Whisper" + str.split(" ")[8] + cham);
   	   	   }
   	   }  	   
   }
   	
   
   })




//615967798488858624




client.login('NjM3ODM3NTExNjgyNDI0ODMz.XbUB8g.fqnRq_qBQYXQi9uRNygr1nx5Jr0');