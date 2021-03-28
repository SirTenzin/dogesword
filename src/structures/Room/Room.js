const { stringToToken } = require('@dogehouse/kebab')


class Room {

    #w

    constructor(w, r) {
        this.#w = w;
        for (var key in r) {
            this[key] = r[key];
        }
    }

    async send(message) {
        await this.#w.mutation.sendRoomChatMsg(stringToToken(message));
    }

    async join() {
        await this.#w.mutation.joinRoom(this.id);
        this.#w.currentRoom = this.id;
        this.#w.clientObj.emit('joinRoom', this);
    }

    play(audioStream) {
        
    }
}

module.exports = Room;