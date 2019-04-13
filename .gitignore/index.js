const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*";
client.login("NTY2NjQyNDc5NTg4MTc5OTY5.XLIXIg.4TRFSkLzobp1vFyjvMHuLrJwWfw");
client.on("ready", () => {
    console.log("Je suis prêt !");
    client.user.setGame("s'Update seul");
});
