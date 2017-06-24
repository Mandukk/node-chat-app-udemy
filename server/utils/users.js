const _ = require('lodash');

class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        //return user that was removed;
        let userRemoved;
        this.users = this.users.filter((user) => {
            if (user.id !== id) {
                return true;
            } else {
                userRemoved = user;
                return false;
            }
        });
        return userRemoved;
    }

    getUser (id) {
        return this.users.find((user) => user.id === id);
    }

    getUserList (room) {
        let users = this.users.filter((user) => user.room === room);
        let namesArray = users.map((user) => user.name);

        return namesArray;
    }

    getRoomsList () {
        let roomsArray = _.uniq(this.users.map((user) => user.room));
        return roomsArray;
    }

}

module.exports = {Users};