require('dotenv').config();

const Client = require('../src/structures/Client/Client');
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
    if(room.id == '819ae88c-94aa-4377-a31f-5affa9178295') {
        room.join();
    }
});

client.on("joinRoom", (room) => {
    console.log("Joined", room)
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