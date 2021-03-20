# Welcome

Welcome to dogehouse.js. A wrapper for the dogehouse API.

# Installation

```
npm i git+https://github.com/SirTenzin/dogehouse.js.git
```

# Usage

```
const Client = require('../src/structures/Client');
const client = new Client();

client.login(
    process.env.T,
    process.env.RT
);
```

# Events

```
debug : Debug events for development
addRoom : During login, this event signals the current room being added to Client#rooms
ready : Called on login
```