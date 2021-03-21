# Welcome

Welcome to dogesword. A wrapper for the dogehouse API.

# Installation

```
npm i git+https://github.com/SirTenzin/dogesword.git
```

# Usage

```
const Client = require('../src/structures/Client');
const client = new Client({
    isBot: true,
    prefix: false
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
```