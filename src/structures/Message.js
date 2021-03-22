const { tokensToString, stringToToken } = require("@dogehouse/kebab");

class Message {

    #c
    
    /**
     * 
     * @param {Object} opts Options for message
     * @param {Object} c Client
     * @param {Object} r Room
     */

    constructor(opts, c, r) {
        for (var key in opts) {
            if(key == "tokens") {
                this["content"] = tokensToString(opts[key])
            } if(key == "id") {
                this["room"] = c.rooms.get(c.wrapper.currentRoom);
            } else {
                this[key] = opts[key]
            }
        }
        this.#c = c;
    }

    /**
     * 
     * @param {String} content Message to send 
     * @returns {Function}
     */
    
    reply(content) {
        return this.#c.wrapper.mutation.sendRoomChatMsg(stringToToken(`@${this.displayName} ` + content))
    }
}


module.exports = Message;