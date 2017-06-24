const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Luiz',
            room: 'Node course'
        },
        {
            id: '2',
            name: 'Carlos',
            room: 'JS'
        },
        {
            id: '3',
            name: 'Berger',
            room: 'Node course'
        }]
    });

    it('should add new user', () => {
        let users = new Users();
        var user = {
            id: '123',
            name: 'Luiz',
            room: 'JavaScript'
        };
        let responseUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let user = users.users[1];
        let userRemoved = users.removeUser('2');
        expect(userRemoved).toEqual(user);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let userRemoved = users.removeUser('4');
        expect(userRemoved).toBe(undefined);
        expect(users.users.length).toBe(3);
        
    });

    it('should find user', () => {
        let user = users.getUser('3');
        expect(user).toEqual(users.users[2]);
    });

    it('should not find user', () => {
        let user = users.getUser('4');
        expect(user).toBe(undefined);
    });

    it('should return names for node courses', () => {
        let userList = users.getUserList('Node course');

        expect(userList).toEqual(['Luiz', 'Berger']);
    });

    it('should return names for JS', () => {
        let userList = users.getUserList('JS');

        expect(userList).toEqual(['Carlos']);
    });

    it('should return all rooms', () => {
        let rooms = users.getRoomsList();
        expect(rooms).toEqual(['Node course', 'JS']);
    })
});