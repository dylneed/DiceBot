function Roll(n) {
return (1 + Math.floor(n * Math.random()));}

var OrderedDeck = new Array ("AC","2C","3C","4C","5C","6C","7C","8C","9C",
	"10C","JC","QC","KC","AH","2H","3H","4H","5H","6H","7H","8H","9H",
	"10H","JH","QH","KH","AS","2S","3S","4S","5S","6S","7S","8S","9S",
	"10S","JS","QS","KS","AD","2D","3D","4D","5D","6D","7D","8D","9D",
	"10D","JD","QD","KD");

function Card(str)
{
	var arr = str.substring();
	var l = arr.length;
	var out = "";
	
	if (arr[0] == "1")
	{
		out += "10";
	}
	else if (arr[0] == "J")
	{
		out += "Jack";
	}
	else if (arr[0] == "Q")
	{
		out += "Queen";
	}
	else if (arr[0] == "K")
	{
		out += "King";
	}
	else if (arr[0] == "A")
	{
		out += "Ace";
	}
	else
	{
		out += "" + arr[0];
	}
	
	out += " of ";
	
	if (arr[l] == "C")
	{
		out += "Clubs";
	}
	else if (arr[l] == "H")
	{
		out += "Hearts";
	}
	else if (arr[l] == "S")
	{
		out += "Spades";
	}
	else if (arr[l] == "D")
	{
		out += "Diamonds";
	}
	
	return out;
}

var letters = new Array ("A","B","C","D","E","F","G","H","I","J","K","L",
	"M","N","O","P","W","X","Y","Z")

function Convert(spliter, string) {
	return parseInt(string.split(spliter)[1]);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;}}}
      
function RDate() {
	var protogreg = Roll(8) - 1;
	var greg = protogreg != 0;
	var currdate = new Date();
	
	var year = 0;
	var month = 0;
	var day = 0;
	var feb = 28;
	var g = 0;
	
	if (greg) {year = (1582 + Roll(currdate.getFullYear() - 1582));} 
	else {year = (100 + Roll(1482) - 1);}
	
	if (protogreg > 5) {year = (1900 + (Roll(currdate.getFullYear()-1900)));}
	
	if (greg) {g = 1;} else {g = 0;}
	
	if (year % 4 == 0) {feb = 29;}
	if (year % 100 == 0) {feb = 29 - g;}
	if (year % 400 == 0) {feb = 29;}
	
	month = Roll(12);
	
	if (month == 2) {day = Roll(28);} else
	if (month == 1 || month == 3 || month == 5 || month == 7 || 
		month == 8 || month == 10 || month == 12) { day = Roll(31);} else
	{day = Roll(30);}
	
	return month + "/" + day + "/" + year;
}

function DOTW(m,q,y) {
	var greg = true;
	var d = false;
    var l = 0;
    var g = 1;
	
	if (((10000*y)+(100*m)+q) < 15821016) {greg = false;}
	
    
    var J = Math.floor(y/100);
    
	var K = (y % 100);
	
	if (greg) {g = 1;} else {g = 0;}    
	if (y % 4 == 0) {l = 1;}
	if (y % 100 == 0) {l = 1 - g;}
	if (y % 400 == 0) {l = 1;}
	
	
	if (!greg) {J = (701 - J) % 7;} else
	if (J % 4 == 0) {J = 3;} else
	if (J % 4 == 1) {J = 1;} else
	if (J % 4 == 2) {J = 6;} else
	if (J % 4 == 3) {J = 4;}
	
	
	if (m == 1) {d = 3 + l;} else
	if (m == 2) {d = 28 + l % 7;} else
	if (m == 3) {d = 0;} else
	if (m == 5) {d = 9 % 7;} else
	if (m == 7) {d = 11 % 7;} else
	if (m == 9) {d = 5;} else
	if (m == 11) {d = 7 % 7;} else
	if (m % 2 == 0) {d = m % 7;}
	
	
	var h = (J + (K % 4) - (2 * Math.floor(K/4)) + q - d + 700) % 7;
	
		
	if (h == 0) {return "Saturday";} else
	if (h == 1) {return "Sunday";} else
	if (h == 2) {return "Monday";} else
	if (h == 3) {return "Tuesday";} else
	if (h == 4) {return "Wednesday";} else
	if (h == 5) {return "Thursday";} else
	if (h == 6) {return "Friday";}
	
}


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
	if (num === 0) {return " of Diamonds";}
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
	if (num === 0) {return "King";} 
	else {return "Error";}
}


function Card(card /*in the format AH etc.*/) {
	var num = 0;
	for (num = 0;num<OrderedDeck.length;num++) {
		if (OrderedDeck[num] === card) {break;} else
		if (num === OrderedDeck.length - 1) {num = "ERROR";}
	}
	var n = num % 52;
	var s = (Math.floor(n/13) + 1)%4;
	var f = ((n + 1) % 13);
	var out = Face(f) + Suit(s);
	return out;
}

function Shuffle(a) {
    var s = new Array();
    for (i=0;i<a.length;i++) {
    	var R = Roll(a.length) - 1;
        while (s.includes(R)) {
        	R = Roll(a.length) - 1;
        }
        s[i] = R;
    }
    var out = new Array();
    for (i=0;i<a.length;i++) {
    	out[i] = a[s[i]]
    }
    return out;
}

var ShuffledDeck = Shuffle(OrderedDeck);

function Deque(a) 
{
	var l = a.length;
	var out = a[0];
	
	for (var i = 0; i < l - 1; i++)
	{
		a[i] = a[i + 1];
	}
	
	a[l - 1] = out;
	return out;
}

const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
client.on('message', msg => {
		
	testchannel = client.channels.get(`615967798488858624`)
		
    if (msg.content.toUpperCase().includes('HELLO DIE', 0))      
        {msg.reply('Hello');}
        
        
    if (msg.content.toUpperCase().startsWith('ROLL ', 0)) 
    	{msg.reply(Roll(Convert('ROLL ', msg.content.toUpperCase())));}
    	
    	
    if (msg.content.toUpperCase().includes("UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A" , 0)) 
        {msg.reply('Fuck you ')}

   if (msg.content.toUpperCase().startsWith("WHISPER",0)) {
   	  user = msg.mentions.members.first();
   	  
   	  if (user == undefined) {msg.delete;} else {
   	  
   	  str = msg.content;
   	  out = str.split(">")[1];
   	  user.send(" " + out);
   	  msg.delete();}
   }
   
   if (msg.content === "P I N G") {
   	   msg.reply("P O N G");
   }
   
   if (msg.content.toUpperCase().startsWith("CHAMELEON")) {
   	   str = msg.content;
   	   tile = letters[Roll(4)-1] + Roll(4);
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
	
	if (msg.content.toUpperCase().startsWith("ACCUSATION")) {
		if (murderer === undefined) {} else {
		msg.author.send("|| " + murderer +" did it with the " + 
		weapon + " in the " + room + "||");}

	}
	if (msg.content.toUpperCase().startsWith("RANDOM CARD")) 
	{
		Shuffle(ShuffledDeck);
		client.channels.get(`615967798488858624`).send 
			("Whisper" + str.split(" ")[i] + Card(Deque(ShuffledDeck)));
	}
	
	
	if (msg.content.toUpperCase().startsWith("DOES THE MOON EXIST?")) {
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
		", that would be silly. " + 
		"The moon died along with the entirety of the " + 
		"Solar System besides Earth. The Chinese have a really big photoshopped"
		+ " canvas that engulfs the sky every night," 
		+ " since the Chinese killed Space.")} else
		if (n === 7) {msg.channel.send("No, "+ msg.author + 
				" you silly goose! The 'lunar lander' they sent"
		+ " to the 'dark side of the moon' is " + 
		"just a satellite used to sharpen the image")}
		if (n === 8) {msg.channel.send("I don't know " + 
		msg.author + " does it?")}
		}
		
	if (msg.content.toUpperCase() === "HELLO THERE") {
		msg.channel.send("General Kenobi, you are a bold one!")
		
	}
   
   
   if (msg.content.toUpperCase().startsWith("TIMER ")) {
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
   
   
   if (msg.content.toUpperCase().startsWith("RANDOM DATE")) {
   	   var out = RDate();
   	   msg.reply(out);
   }
   
   
   if (msg.content.toUpperCase().startsWith("DOTW ")) {
   	   var str = msg.content.toUpperCase();
   	   var date = str.split("DOTW ")[1];
   	   var m = parseInt(date.split("/")[0]);
   	   var d = parseInt(date.split("/")[1]);
   	   var y = parseInt(date.split("/")[2]);
   	   var out = DOTW(m,d,y);
   	   msg.channel.send(date + " is a " + out);
   }
   
   if (msg.content.toUpperCase() === "BITCH") {
   	   msg.channel.send("That's Lt. Cmdr. Bitch to you, " + msg.author);
   }
   
   if (msg.content.toUpperCase().startsWith("LIAR'S POKER")) 
   {
   	   Shuffle(ShuffledDeck);
   	   var Deal = msg.content.split(" ");
   	   var Players = new Array(Deal.length - 2);
   	   var count = 0;
   	   
   	   for (var i = 0; i < Players.length; i++)
   	   {
   	   	   Players[i] = " ";
   	   }
   	   
   	   for (var i = 2; i < Deal.length; i++)
   	   {
   	   	   try
   	   	   {
   	   	   	   if (!(Players.includes(Deal[i])))
   	   	   	   {
   	   	   	   	   Players[count] = Deal[i]
   	   	   	   	   count++;
   	   	   	   }
   	   	   }
   	   	   catch (e)
   	   	   {
   	   	   	   
   	   	   }
   	   }
   	   
   	   for (var i = 0; i < count; i++)
   	   {
   	   	   try
   	   	   {
   	   	   	   client.channels.get(`615967798488858624`).send
   	   	   	   ("Whisper" + Players[i] + "It Begins");
   	   	   }
   	   	   catch(e)
   	   	   {
   	   	   	   msg.reply("I'm in great pain");
   	   	   }
   	   }
   	   
   	   for (var i = 2; i < Deal.length; i++)
   	   {
   	   	   try
   	   	   {
   	   	   	   client.channels.get(`615967798488858624`).send
   	   	   	   ("Whisper" + Deal[i] + Card(Deque(ShuffledDeck)));
   	   	   }
   	   	   catch(e)
   	   	   {
   	   	   	   msg.reply("Help me");
   	   	   }
   	   }
   	   
   }
   
   /*if(msg.content.toUpperCase().startWith("DEAL "))
   {
   	   client.channels.get(`615967798488858624`).send
   	   	("Whisper" + msg.content.split(" ")[1] + Card(Deque(ShuffledDeck)));
   }
   
   if (msg.content.toUpperCase().startsWith("HEARTS "))
   {
   	   Shuffle(ShuffledDeck);
   	   var arr = msg.content.split(" ");
   	   
   	   for(var i = 1; i < arr.length; i++)
   	   {
   	   	   client.channels.get(`615967798488858624`).send
   	   	   	   ("Whisper" + arr[i] + "Here you go!");
   	   }
   	   
   	   for (var i = 0; i < 52; i++)
   	   {
   	   	   client.channels.get(`615967798488858624`).send
   	   	   	   ("Whisper" + arr[(i % (arr.length - 1)) + 1] + 
   	   	   	   	   Card(Deque(ShuffledDeck)));
   	   }
   }*/
 
})




//615967798488858624




client.login('NjM3ODM3NTExNjgyNDI0ODMz.XbUB8g.fqnRq_qBQYXQi9uRNygr1nx5Jr0');