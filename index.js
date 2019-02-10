//Base bot discord :
const Discord = require('discord.js');

const client = new Discord.Client();

//Variables :

var prefix = "k!";

//Login + connexion du bot :
client.login(process.env.TOKEN);

client.on("ready", () => {
	console.log("Connexion en cours ...");
    	setInterval(function() {

        	var statut = [
          	`KiwiBot pour Marie Studio`, 
          	`KiwiBot By FilEeaZaiR`,
          	`${client.users.size} users`];
    
        	var random = Math.floor(Math.random()*(statut.length));
    
        	client.user.setPresence({ 
            		game: { 
            		name: statut[random],
            		type: 0
          		}
        	});
      }, 30000); 
});

client.on("guildMemberAdd", member => {

    const logs = member.guild.channels.find(m => m.id === "544146628332748807");
    if (!logs) return;

    logs.send({
        embed: {
            color: 0xFE6F01,
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            title: "Arrivée d'un nouvel utilisateur",
            fields: [
            {
                name: "Un nouvel utilisateur vient d'arriver",
                value: `Il s'agit de [${member.user.tag}]`,
                inline: true
            },
            {
                name: `Nombre de membres après l'arrivée de __${member.user.tag}__`,
                value: member.guild.memberCount,
                inline: false
            }],
            timestamp: new Date(),
            footer: {
                text: `ID : ${member.user.id} | FilEeaZaiR#1258`,
            }
        }
    });
});

client.on(`message`, message =>{
if(message.content.startsWith(prefix + "accept")) {

    message.delete()

    let user = message.guild.member(message.author);

    let role = message.guild.roles.find(m => m.id === "544130573799784458");
    if(!role) return console.log("Le rôle n'existe pas !");

    user.addRole(role).catch(console.error);
    message.channel.send(`**Bravo, tu as accepté le règlement**`);
    
}

});