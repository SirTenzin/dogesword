const { raw, wrap } = require('@dogehouse/kebab');
const Base = require('./Base');
const Room = require('./Room');
const EventEmitter = require('events');

module.exports = class Client extends Base {

    constructor(opts) {
        super();
        this.connection;
        this.opts = opts;
        this.wrapper;
    }

    async login(t, rt) {
        if(!t || !rt) throw new Error("Doge says you need a token and refresh token :)");

        this.connection = await raw.connect(t, rt,
            {
              onConnectionTaken: () => {
                throw new Error("Doge says your logged in somewhere else :(");
              }
            }
        );
        this.emit("ready", this.connection)
        this.wrapper = wrap(this.connection);
        this.channels = new Map();
        await this.wrapper.query.getTopPublicRooms().then(e => {
            e.rooms.forEach(room => {
                this.channels.set(room.id, new Room(this.wrapper, room))
                this.emit("addRoom", this.channels.get(room.id));
            });
        })
    }

}