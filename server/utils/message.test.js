const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        let message = generateMessage('Mandukk', 'Hello');
        expect(message.from).toBe('Mandukk');
        expect(message.text).toBe('Hello');
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let latitude = '123';
        let longitude = '456';
        let from = 'Admin';

        let message = generateLocationMessage(from, latitude, longitude);
        expect(message.from).toBe(from);
        expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(message.createdAt).toBeA('number');
    });
});