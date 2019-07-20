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

    const logs = member.guild.channels.find(m => m.id === "601060734146838548");
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
                name: "Un nouveau Kiwi vient d'arriver",
                value: `Il s'agit de [${member.user.tag}]`,
                inline: true
            },
            {
                name: `Nombre de Kiwis après l'arrivée de __${member.user.tag}__`,
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

client.on("guildMemberRemove", member => {

    const logs = member.guild.channels.find(m => m.id === "601060734146838548");
    if (!logs) return;
	
    logs.send({embed: {
            color: 0xFE6F01,
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            title: "Départ d'un utilisateur",
	    image: {
		    url: "http://www.lesaffaires.com/uploads/images/normal/578f645f2123b12d0257dfa1fbdb8fff.jpg"
	    },
	    thumbnail: {
                        url: member.user.displayAvatarURL
            },
            fields: [
            {
                name: "Un Kiwi vient de partir",
                value: `Il s'agit de [${member.user.tag}]`,
                inline: true
            },
            {
                name: `Nombre de Kiwis après le départ de __${member.user.tag}__`,
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

//Début de la commande règlements :
client.on(`message`, message =>{
 
//Commandes addrole :
    if(message.content === prefix + "role1" || message.content === prefix + "addrole1") {
        console.log(`Un utilisateur viens de faire la commande roles !`)
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                fields: [
                {
                    name: "Catégorie sexe :",
                    value: "Alors voici des rôles disponible :",
                    inline: false
                },
                {
                    name: "Filles :",
                    value: "Appuyez sur :girl:",
                    inline: false
                },
                {
                    name: "Garçons :",
                    value: "Appuyez sur :boy:",
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    text: `AddRole | FilEeaZaiR#1258`,
                }
            }
        });
    }
    
    if(message.content === prefix + "role2" || message.content === prefix + "addrole2") {
        console.log(`Un utilisateur viens de faire la commande roles !`)
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                fields: [
                {
                    name: "Catégorie âge :",
                    value: "Alors voici des rôles disponible :",
                    inline: false
                },
                {
                    name: "-10 ans :",
                    value: "Appuyez sur :one:",
                    inline: false
                },
                {
                    name: "10/12 ans :",
                    value: "Appuyez sur :two:",
                    inline: false
                },
                {
                    name: "12/14 ans :",
                    value: "Appuyez sur :three:",
                    inline: false
                },
                {
                    name: "14/16 ans :",
                    value: "Appuyez sur :four:",
                    inline: false
                },
                {
                    name: "16/18 ans :",
                    value: "Appuyez sur :five:",
                    inline: false
                },
                {
                    name: "+18 ans :",
                    value: "Appuyez sur :six:",
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    text: `AddRole | FilEeaZaiR#1258`,
                }
            }
        });
    }

    if(message.content === prefix + "role3" || message.content === prefix + "addrole3") {
        console.log(`Un utilisateur viens de faire la commande roles !`)
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                fields: [
                {
                    name: "Catégorie passion :",
                    value: "Alors voici des rôles disponible :",
                    inline: false
                },
                {
                    name: "Musicien :",
                    value: "Appuyez sur :one:",
                    inline: false
                },
                {
                    name: "Éditeur :",
                    value: "Appuyez sur :two:",
                    inline: false
                },
                {
                    name: "Créatif :",
                    value: "Appuyez sur :three:",
                    inline: false
                },
                {
                    name: "Sportif :",
                    value: "Appuyez sur :four:",
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    text: `AddRole | FilEeaZaiR#1258`,
                }
            }
        });
    }
	
    if(message.content === prefix + "role4" || message.content === prefix + "addrole4") {
        console.log(`Un utilisateur viens de faire la commande roles !`)
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                fields: [
                {
                    name: "Catégorie Gacha :",
                    value: "Alors voici des rôles disponible :",
                    inline: false
                },
                {
                    name: "GachaLife :",
                    value: "Appuyez sur :one:",
                    inline: false
                },
                {
                    name: "GachaStudio :",
                    value: "Appuyez sur :two:",
                    inline: false
                },
                {
                    name: "GachaVerse :",
                    value: "Appuyez sur :three:",
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    text: `AddRole | FilEeaZaiR#1258`,
                }
            }
        });
    }
});
