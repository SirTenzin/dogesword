require('dotenv').config();

const Client = require('../src/structures/Client');
const client = new Client();

client.login(
    process.env.T,
    process.env.RT
);

client.on("ready", (e) => {
    console.log(`Ready`)
})

client.on("addRoom", (r) => {
    if(r.id == 'cc4bd0a3-304f-4414-aefb-e60e01fec9e2') {
        r.send("hello")
    }
})

client.on("message", (message) => {
    console.log(message)
})