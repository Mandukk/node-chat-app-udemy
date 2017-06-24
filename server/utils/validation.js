let isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};

let userConnected = (username, room, users) => {
    let usersFiltered =  users.filter((user) => {
        if (user.name === username && user.room === room) {
            return true;
        } else {
            return false;
        }
    });
    if (usersFiltered.length === 0) {
        return false
    } else {
        return true
    }
}

module.exports = {
    isRealString,
    userConnected
}