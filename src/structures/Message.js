const { tokensToString } = require("@dogehouse/kebab")

module.exports = class Message {

    constructor(opts, c) {
        for (var key in opts) {
            if(key == "tokens") {
                this["content"] = tokensToString(opts[key])
            } if(key == "id") {
                this["room"] = c.rooms.get(opts[key])
            } else {
                this[key] = opts[key]
            }
        }
    }

}