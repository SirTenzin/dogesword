require('dotenv').config();

const Client = require('../src/structures/Client');
const client = new Client({
    isBot: true,
    prefix: "s!"
});

client.on("ready", (e) => {
    console.log(`Bot logged in as ${JSON.stringify(e.user)}`);
})

client.on("message", (message) => {
    console.log(message)
});

client.on("addRoom", (room) => {
    console.log(room)
    if(room.id == 'ee31fca3-000f-433f-a638-5681f5f9561e') {
        room.join();
    }
});

client.on("command", (command) => {
    if(command.content.startsWith("s!say")) {
        command.room.send(command.content.split("s!say ")[1])
    } else if(command.content.startsWith("s!flip")) {
        command.room.send("bruh 123")
    }
})

client.login(
    process.env.T,
    process.env.RT
);