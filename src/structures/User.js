class User {

    constructor(opts) {
        for (var key in opts) {
            this[key] = opts[key]
        }
    }
    
}

module.exports = User