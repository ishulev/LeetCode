const reverse = require('../tasks/07.reverse-integer.js');

test('returns reversed int', () => {
    expect(reverse(123)).toBe(321);
});

test('returns 0, when given 0', () => {
    expect(reverse(0)).toBe(0);
});

test('returns negative, when given negative', () => {
    expect(reverse(-123)).toBe(-321);
});

test('return 0, when given an overflowing number', () => {
    expect(reverse(1534236469)).toBe(0);
});