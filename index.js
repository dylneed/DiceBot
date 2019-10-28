function Roll(n) {
return (1 + Math.floor(n * Math.random()));}

function Convert(spliter, string) {
	return parseInt(string.split(spliter)[1])
}
/*s
function NumToLettBad(n) {
if (n === 1) {return 'A'} else
if (n === 2) {return 'B'} else
if (n === 3) {return 'C'} else
if (n === 4) {return 'D'}}

function Cham(str) {
	var tile = (NumToLettBad(Roll(4)) + Roll(4));
	
	var stra = str.split(str,1);
	var a = str.mentions.users.first();
	
	if (d == null) {var choose = Roll(3);
					if (choose = 1) {a.send("You Are The Chameleon");
									 b.send(tile);
									 c.send(tile);} else
	                if (choose = 2) {a.send(tile);
									 b.send("You Are The Chameleon");
									 c.send(tile);} else
				    if (choose = 3) {a.send(tile);
									 b.send(tile);
									 c.send("You Are The Chameleon");}} else
	if (e == null) {var choose = Roll(4);
	                if (choose = 1) {a.send("You Are The Chameleon");
									 b.send(tile);
									 c.send(tile);
					                 d.send(tile);} else
	                if (choose = 2) {a.send(tile);
									 b.send("You Are The Chameleon");
									 c.send(tile);
					                 d.send(tile);} else
				    if (choose = 3) {a.send(tile);
									 b.send(tile);
									 c.send("You Are The Chameleon");
					                 d.send(tile);} else
	                if (choose = 4) {a.send(tile);
									 b.send(tile);
									 c.send(tile);
					                 d.send("You Are The Chameleon");}} else
	if (f == null) {var choose = Roll(5);
	                if (choose = 1) {a.send("You Are The Chameleon");
									 b.send(tile);
									 c.send(tile);
					                 d.send(tile);
					                 e.send(tile);} else
	                if (choose = 2) {a.send(tile);
									 b.send("You Are The Chameleon");
									 c.send(tile);
					                 d.send(tile);
					                 e.send(tile);} else
				    if (choose = 3) {a.send(tile);
									 b.send(tile);
									 c.send("You Are The Chameleon");
					                 d.send(tile);
					                 e.send(tile);} else
	                if (choose = 4) {a.send(tile);
									 b.send(tile);
									 c.send(tile);
					                 d.send("You Are The Chameleon");
	                                 e.send(tile);} else
	                if (choose = 5) {a.send(tile);
									 b.send(tile);
									 c.send(tile);
					                 d.send(tile);
	                                 e.send("You Are The Chameleon");}} else
	if (g == null) {var choose = Roll(6);
	                if (choose = 1) {a.send("You Are The Chameleon");
									 b.send(tile);
									 c.send(tile);
					                 d.send(tile);
					                 e.send(tile);
	                                 f.send(tile);} else
	                if (choose = 2) {a.send(tile);
									 b.send("You Are The Chameleon");
									 c.send(tile);
					                 d.send(tile);
					                 e.send(tile);
	                                 f.send(tile);} else
				    if (choose = 3) {a.send(tile);
									 b.send(tile);
									 c.send("You Are The Chameleon");
					                 d.send(tile);
					                 e.send(tile);
	                                 f.send(tile);} else
	                if (choose = 4) {a.send(tile);
									 b.send(tile);
									 c.send(tile);
					                 d.send("You Are The Chameleon");
	                                 e.send(tile);
	                                 f.send(tile);} else
	                if (choose = 5) {a.send(tile);
									 b.send(tile);
									 c.send(tile);
					                 d.send(tile);
	                                 e.send("You Are The Chameleon");
	                                 f.send(tile);} else
	               if (choose = 6) {a.send(tile);
								    b.send(tile);
									c.send(tile);
					                d.send(tile);
	                                e.send(tile);
									f.send("You Are The Chameleon");}} else
	if (h == null) {var choose = Roll(7);
	                if (choose = 1) {a.send("You Are The Chameleon");
									 b.send(tile);
									 c.send(tile);
					                 d.send(tile);
					                 e.send(tile);
	                                 f.send(tile);
	                				 g.send(tile);} else
	                if (choose = 2) {a.send(tile);
									 b.send("You Are The Chameleon");
									 c.send(tile);
					                 d.send(tile);
					                 e.send(tile);
	                                 f.send(tile);
	                				 g.send(tile);} else
				    if (choose = 3) {a.send(tile);
									 b.send(tile);
									 c.send("You Are The Chameleon");
					                 d.send(tile);
					                 e.send(tile);
	                                 f.send(tile);
	                				 g.send(tile);} else
	                if (choose = 4) {a.send(tile);
									 b.send(tile);
									 c.send(tile);
					                 d.send("You Are The Chameleon");
	                                 e.send(tile);
	                                 f.send(tile);
	                				 g.send(tile);} else
	                if (choose = 5) {a.send(tile);
									 b.send(tile);
									 c.send(tile);
					                 d.send(tile);
	                                 e.send("You Are The Chameleon");
	                                 f.send(tile);
	                				 g.send(tile);} else
	               if (choose = 6) {a.send(tile);
								    b.send(tile);
									c.send(tile);
					                d.send(tile);
	                                e.send(tile);
									f.send("You Are The Chameleon");
	                				g.send(tile);} else
	               if (choose = 7) {a.send(tile);
								    b.send(tile);
									c.send(tile);
					                d.send(tile);
	                                e.send(tile);
									f.send(tile);
	                				g.send("You Are The Chameleon");}} else
				   {var choose = Roll(8);
	                if (choose = 1) {a.send("You Are The Chameleon");
									 b.send(tile);
									 c.send(tile);
					                 d.send(tile);
					                 e.send(tile);
	                                 f.send(tile);
	                				 g.send(tile);
	                                 h.send(tile);} else
	                if (choose = 2) {a.send(tile);
									 b.send("You Are The Chameleon");
									 c.send(tile);
					                 d.send(tile);
					                 e.send(tile);
	                                 f.send(tile);
	                				 g.send(tile);
	                                 h.send(tile);} else
				    if (choose = 3) {a.send(tile);
									 b.send(tile);
									 c.send("You Are The Chameleon");
					                 d.send(tile);
					                 e.send(tile);
	                                 f.send(tile);
	                				 g.send(tile);
	                                 h.send(tile);} else
	                if (choose = 4) {a.send(tile);
									 b.send(tile);
									 c.send(tile);
					                 d.send("You Are The Chameleon");
	                                 e.send(tile);
	                                 f.send(tile);
	                				 g.send(tile);
	                                 h.send(tile);} else
	                if (choose = 5) {a.send(tile);
									 b.send(tile);
									 c.send(tile);
					                 d.send(tile);
	                                 e.send("You Are The Chameleon");
	                                 f.send(tile);
	                				 g.send(tile);
	                                 h.send(tile);} else
	               if (choose = 6) {a.send(tile);
								    b.send(tile);
									c.send(tile);
					                d.send(tile);
	                                e.send(tile);
									f.send("You Are The Chameleon");
	                				g.send(tile);
	                                 h.send(tile);} else
	               if (choose = 7) {a.send(tile);
								    b.send(tile);
									c.send(tile);
					                d.send(tile);
	                                e.send(tile);
									f.send(tile);
	                				g.send("You Are The Chameleon");
	                                h.send(tile);} else
	               if (choose = 8) {a.send(tile);
								    b.send(tile);
									c.send(tile);
					                d.send(tile);
	                                e.send(tile);
									f.send(tile);
	                				g.send(tile);
	                                h.send("You Are The Chameleon");}}
}*/


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
    	
    	
    if (msg.content.includes( "up up down down left right left right b a" , 0)) 
        {msg.reply('Fuck you ')}
/*
   if (msg.content.startsWith( "Chameleon")) {
   	  /// msg.reply(String(msg));
   	  ///Cham(String(msg));
   	  var a = msg.mentions.users.first();
   msg.reply(a);}*/
   	   
   })









client.login('NjM3ODM3NTExNjgyNDI0ODMz.XbUB8g.fqnRq_qBQYXQi9uRNygr1nx5Jr0');