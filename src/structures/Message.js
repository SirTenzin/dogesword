const { tokensToString, stringToToken } = require("@dogehouse/kebab")

module.exports = class Message {

    constructor(opts, c) {
        for (var key in opts) {
            if(key == "tokens") {
                this["content"] = tokensToString(opts[key])
            } if(key == "id") {
                this["room"] = c.rooms.get(opts["id"])
            } else {
                this[key] = opts[key]
            }
        }
        this.c = c;
    }

    reply(content) {
        return this.c.wrapper.mutation.sendRoomChatMsg(stringToToken(`@${this.displayName} ` + content))
    }
}