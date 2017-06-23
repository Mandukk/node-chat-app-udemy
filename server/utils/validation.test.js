const expect = require('expect');

const {isRealString} = require('./validation')

describe('isRealString', () => {
    it('should reject non string values', () => {
        const value = 123;
        expect(isRealString(value)).toBe(false);
    });
    it('should reject strings with only spaces', () => {
        const value = '         ';
        expect(isRealString(value)).toBe(false);
    });
    it('should allow strings with non spaces characters', () => {
        const value = 'normal';
        expect(isRealString(value)).toBe(true);
    });
});