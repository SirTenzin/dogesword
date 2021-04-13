# DogeSword has been deprecated!

This package is deprecated. Use [DogeHouse.js](https://npm.im/dogehouse.js)

# Welcome

Welcome to dogesword. A wrapper for the dogehouse API client "kebab". You can use this to create
a simple DogeHouse bot

# Installation

```
npm i dogesword
```

# Usage

```
const Client = require('dogesword');
const client = new Client({
    isBot: true, // boolean
    prefix: "!" // string or empty string
});

client.on("addRoom", (room) => {
    if(/* condition */) {
        room.join();
    }
})

client.on("message", (message) => {
    message.reply("Hello from DogeSword!");
});

client.login(
    process.env.T,
    process.env.RT
);
```

# Events

```
debug: Debug events for development
addRoom: During login, this event signals the current room being added to Client#rooms
ready: Called on login
message: Called on a new message
command: Called if isBot and prefix are true/defined and matched
joinRoom: Called when bot joins a room
```

# Classes

```
Base
Client
ClientUser
Message
Room
User
```

# Documentation
[Wiki](https://github.com/sirtenzin/dogesword/wiki)
