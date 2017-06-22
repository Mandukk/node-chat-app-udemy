const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        let message = generateMessage('Mandukk', 'Hello');
        expect(message.from).toBe('Mandukk');
        expect(message.text).toBe('Hello');
        expect(message.createdAt).toBeA('number');
    });
});