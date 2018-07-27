const convert = require('../tasks/06.zigzag-conversion');

test('convert(PAYPALISHIRING, 3) equals PAHNAPLSIIGYIR', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
})