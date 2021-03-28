const { tokensToString, stringToToken } = require("@dogehouse/kebab");
const User = require('./User');

class Message {

    #c
    #user = {};
    
    /**
     * @constructor
     * @param {Object} opts Options for message
     * @param {Object} c Client
     * @param {Object} r Room
     */

    constructor(opts, c) {
        for (var key in opts) {
            if(key == "tokens") {
                this["content"] = tokensToString(opts[key])
            } if(key == "userId") {
                this.#user["id"] = opts[key];
            } else if(key == "username") {
                this.#user[key] = opts[key];
            } else  if(key == "displayName") {
                this.#user[key] = opts[key];
            } else if(key == "avatarUrl") { 
                this.#user[key] = opts[key];
            } else {
                this[key] = opts[key]
                this["room"] = c.rooms.get(c.wrapper.currentRoom);
            }
        }
        this.#c = c;
        this.author = new User(this.#user);
        c.users.set(this.#user.userId, this.author)
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