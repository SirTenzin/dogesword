class ClientUser {

    #baseURL

    constructor(user) {
        for(var key in user) {
            this[key] = user[key];
        }
        this.#baseURL = "https://dogehouse.tv/user/"
    }

    setUsername() {

    }

    setDisplayname() {

    }

    get profileURL() {
        return this.#baseURL + this.username
    }

    get displayAvatarURL() {
        return this.
    }
}

module.exports = ClientUser;