const { raw, wrap, tokensToString, stringToToken } = require('@dogehouse/kebab');
const Base = require('./Base');
const Room = require('./Room');
const Message = require('./Message');
const ClientUser = require('./Client/ClientUser');

class Client extends Base {

    constructor(opts) {
        super();
        this.connection;
        this.opts = opts;
        this.wrapper;
        this.listenForCommands = false;
        this.rooms = new Map();
        if(typeof opts == "object") {
            if(typeof opts.isBot == undefined) {
                if(typeof opts.prefix == undefined) {
                    throw new Error("Doge says you need to provide isBot and prefix in options!")
                }
            } else if(opts.isBot && opts.prefix) {
                this.listenForCommands = true;
                this.prefix = opts.prefix;
                this.commands = new Map();
                this.aliases = new Map();
            }
        }

    }

    /**
     * Login using your tokens
     * @param {string} t Token to login with
     * @param {*} rt Refresh Token to login with
     * @function
     */

    async login(t, rt) {
        if(!t || !rt) throw new Error("Doge says you need a token and refresh token :)");
        if(!this.prefix) this.emit("debug", { message: "Bot mode disabled, command events will not be triggered" })
        this.connection = await raw.connect(t, rt,
            {
              onConnectionTaken: () => {
                throw new Error("Doge says your logged in somewhere else :(");
              }
            }
        );

        this.emit("ready", this.connection);
        this.user = new ClientUser(this.connection);
        this.wrapper = wrap(this.connection);
        var s = await this.wrapper.subscribe.newChatMsg(async ({ userId, msg }) => {
            this.emit("message", new Message(msg, this, this.rooms))

            if(this.listenForCommands) {
                if(tokensToString(msg.tokens).startsWith(this.prefix)) {
                    this.emit("command", new Message(msg, this, this.rooms))
                }
            }
        });
        
        var l = await this.wrapper.query.getTopPublicRooms().then(e => {
            e.rooms.forEach(room => {
                this.rooms.set(room.id, new Room(this.wrapper, room))
                this.emit("addRoom", this.rooms.get(room.id));
            });
        });

        return { 
            l,
            s
        }
    }

}

module.exports = Client;