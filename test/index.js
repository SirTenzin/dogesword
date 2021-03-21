require('dotenv').config();

const Client = require('../src/structures/Client');
const client = new Client({
    isBot: true,
    prefix: "s!"
});

client.on("ready", (e) => {
    console.log(`Bot logged in as ${e.user.username}`);
})

client.on("message", (message) => {
    console.log(message)
});

client.on("addRoom", (room) => {
    if(room.id == 'c7dd13fa-5d75-40fa-958f-a7004ffa4a4a') {
        room.join();
    }
});

client.on("command", (command) => {
    if(command.content.startsWith("s!say")) {
        command.reply(command.content.split("s!say ")[1])
    }
})

client.login(
    process.env.T,
    process.env.RT
);