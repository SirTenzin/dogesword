const { stringToToken } = require('@dogehouse/kebab')

module.exports = class Room {

    constructor(w, r) {
        this.w = w;
        for (var key in r) {
            this[key] = r[key];
        }
    }

    async send(message) {
        await this.w.mutation.joinRoom(this.id);
        await this.w.mutation.sendRoomChatMsg(stringToToken(message));
    }

    async disconnect() {
        await this.w.mutation.leaveRoom();
    }

    async join() {
        await this.w.mutation.joinRoom(this.id);
    }

    async connect() {
        await this.w.mutation.joinRoom(this.id);
    }
}