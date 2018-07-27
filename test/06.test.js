const convert = require('../tasks/06.zigzag-conversion');

test('convert(PAYPALZ, 3) equals PAAPLYZ', () => {
    expect(convert('PAYPALZ', 3)).toBe('PAAPLYZ');
});

test('convert(PAYPALISHIRING, 3) equals PAHNAPLSIIGYIR', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
});

test('convert(PAYPALISHIRING, 5) equals PRAIIYHNPSGAIL', () => {
    expect(convert('PAYPALISHIRING', 5)).toBe('PRAIIYHNPSGAIL');
});