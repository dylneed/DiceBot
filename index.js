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

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;}}}
      


function Clue(num) {
   	   	   
   	 		if (num ===  1) {return "Colonel Mustard";} else
   	 		if (num ===  2) {return "Professor Plum";} else
   	 		if (num ===  3) {return "Mr. Green";} else
   	 		if (num ===  4) {return "Mrs. Peacock";} else
   	 		if (num ===  5) {return "Miss Scarlet";} else
   	 		if (num ===  6) {return "Mrs. White";} else
  	   	   
   	 		if (num ===  7) {return "Knife";} else
   	 		if (num ===  8) {return "Candlestick";} else
   	 		if (num ===  9) {return "Revolver";} else
   	 		if (num === 10) {return "Rope";} else
   	 		if (num === 11) {return "Lead Pipe";} else
   	 		if (num === 12) {return "Wrench";} else
  	   	   
   	 		if (num === 13) {return "Hall";} else
   	 		if (num === 14) {return "Lounge";} else
   	 		if (num === 15) {return "Dining Room";} else
   	 		if (num === 16) {return "Kitchen";} else
   	 		if (num === 17) {return "Ballroom";} else
   	 		if (num === 18) {return "Conservatory";} else
   	 		if (num === 19) {return "Billiard Room";} else
   	 		if (num === 20) {return "Library";} else
   	 		if (num === 21) {return "Study";}
        
		else {return "Error";}}
		
function Suit(num) {
	if (num === 1) {return " of Clubs";} else
	if (num === 2) {return " of Hearts";} else
	if (num === 3) {return " of Spades";} else
	if (num === 4) {return " of Diamonds";}
	else {return "Error"}
}

function Face(num) {
	if (num === 1) {return "Ace";} else 
	if (num === 2) {return "Two"} else
	if (num === 3) {return "Three"} else
	if (num === 4) {return "Four"} else
	if (num === 5) {return "Five"} else
	if (num === 6) {return "Six"} else
	if (num === 7) {return "Seven"} else
	if (num === 8) {return "Eight"} else
	if (num === 9) {return "Nine"} else
	if (num === 10) {return "Ten"}
	if (num === 11) {return "Jack";} else
	if (num === 12) {return "Queen";} else
	if (num === 13) {return "King";} 
	else {return "Error";}
}
      



const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
client.on('message', msg => {
		
	testchannel = client.channels.get(`615967798488858624`)
		
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
   	   str = msg.content;
   	   tile = NumToLettBad(Roll(4)) + Roll(4);
   	   cham = "You are the Chameleon";
   	   num  = str.split(" ").length - 1;
   	   deal = Roll(num);
   	   
   	   for (i = 1;i <= num ;i++) {
   	   	   if (i === deal)
   	   	   	   {client.channels.get(`615967798488858624`).send
   	   	   	   ("Whisper" + str.split(" ")[deal] + cham);
   	   	   	   continue;}
   	   	   client.channels.get(`615967798488858624`).send(
   	   	   "Whisper" + str.split(" ")[i] + tile);
   	   	   continue;
   	   }
   }
   
   
   
	if (msg.content.startsWith("Clue")) {
		str = msg.content;
		size = str.split(" ").length - 1;
		   
		murderer = Clue(Roll(6));
		weapon = Clue(Roll(6) + 6);
		room = Clue(Roll(9) + 12);
		   
		var storage = [murderer, weapon, room];
		
			for (i = 1; i <= size; i++) {
				client.channels.get(`615967798488858624`).send 
				("Whisper" + str.split(" ")[i] + "Here are your cards");
			}
			
			for (i = 0;i<18;i++) {
				s = (i%size) + 1;
				
				c = Clue(Roll(21));
				while (storage.includes(c)){
					c = (Clue(Roll(21)));
				}
				
				storage.push(c);
				   
				client.channels.get(`615967798488858624`).send 
				("Whisper " + str.split(" ")[s] + c);
			}
	}
	
	if (msg.content.startsWith("Accusation")) {
		if (murderer === undefined) {} else{
		msg.author.send("|| " + murderer +" did it with the " + 
		weapon + " in the " + room + "||");}

	}
	/*
	if (msg.content.startsWith("Deal")) {
		str = msg.content;
		size = str.split(" ").length - 2;
		hand = str.split(" ")[1];
		storage = [];
		
		// card => (Roll)
		
		if (msg.content.includes("All")) {
			
					}
			 else {
			for (i = 1; i <= size; i++) {
				client.channels.get(`615967798488858624`).send 
				("Whisper" + str.split(" ")[i + 1] + "Here are your cards");
				for (v = 1; v <= hand; v++) {
					c = Face(Roll(13)) + Suit(Roll(4));
					while (storage.includes(c)) {
						c = Face(Roll(13)) + Suit(Roll(4));
					}
					client.channels.get(`615967798488858624`).send 
					("Whisper" + str.split(" ")[i + 1] + c);
				}
			}
		}
	}
	
	if (msg.content.startsWith("Draw")) {
			c = Face(Roll(13)) + Suit(Roll(4));
					while (storage.includes(c)) {
						c = Face(Roll(13)) + Suit(Roll(4));
					}
	}
	
	if (msg.content.startsWith("Reshuffle")) {
		storage = [];
	}
	
	if (msg.content.startsWith("Random card") || 
		msg.content.startsWith("Random Card")) {
		msg.reply(Face(Roll(13)) + Suit(Roll(4)));
	} */
	
	
	if (msg.content.startsWith("Does the moon exist?")) {
		var n = Roll(9);
		if (n === 1) {msg.channel.send("No, " + msg.author + 
				", 'tis a silly question. " + 
				"Obviously the moon does not exist. It is a hologram.")} else
		if (n === 2) {msg.channel.send("No, " + msg.author + 
		", the moon is a hologram.")} else
		if (n === 3) {msg.channel.send("Why yes, "+ msg.author +
		", it does exist.")} else
		if (n === 4) {msg.channel.send("No, " + msg.author + 
		", the moon does not exist.")} else
		if (n === 5) {msg.channel.send("I have no idea " + msg.author + 
		". You should go with your heart.")}
		if (n === 6) {msg.channel.send("No, " + msg.author + 
		", that would be silly. " + "The moon died along with the entirety of the " + 
		"Solar System besides Earth. The Chinese have a really big photoshopped "+
		"canvas that engulfs the sky every night," 
		+ " since the Chinese killed Space.")} else
		if (n === 7) {msg.channel.send("No, "+ msg.author + 
				" you silly goose! The 'lunar lander' they sent"
		+ " to the 'dark side of the moon' is " + 
		"just a satellite used to sharpen the image")}
		if (n === 8) {msg.channel.send("I don't know " + 
		msg.author + " does it?")}
		
 		
	}
   
   
   if (msg.content.startsWith("Timer ")) {
   	   str = msg.content;
   	   num = Convert("Timer ",str);
   	   
   	   setTimeout(function(){msg.reply(
   	   "The timer is finished");},(num * 60 * 1000));
   	   
   	   if (num > 5) {
   	   	   setTimeout(function(){msg.reply(
   	   	   "There are 5 minutes left on the timer");},
   	   	   	   ((num - 5) * 60 * 1000));
   	   } 
   	   
   	   if (num > 10) {
   	   	   setTimeout(function(){msg.reply(
   	   	   "There are 10 minutes left on the timer");},
   	   	   	   ((num - 10) * 60 * 1000));
   	   }
   	   
   	   if (num > 15) {
   	   	   setTimeout(function(){msg.reply(
   	   	   "There are 15 minutes left on the timer");},
   	   	   	   ((num - 15) * 60 * 1000));
   	   }
   	   
   	   if (num > 30) {
   	   	   setTimeout(function(){msg.reply(
   	   	   "There are 30 minutes left on the timer");},
   	   	   	   ((num - 30) * 60 * 1000));
   	   }
   	   
   	   if (num > 60) {
   	   	   setTimeout(function(){msg.reply(
   	   	   "There are 60 minutes left on the timer");},
   	   	   	   ((num - 60) * 60 * 1000));
   	   }
   }
 
})




//615967798488858624




client.login('NjM3ODM3NTExNjgyNDI0ODMz.XbUB8g.fqnRq_qBQYXQi9uRNygr1nx5Jr0');