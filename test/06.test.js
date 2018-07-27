const convert = require('../tasks/06.zigzag-conversion');

test('convert(A, 1) equals A', () => {
    expect(convert('A', 1)).toBe('A');
});

test('convert(PAYPALZ, 3) equals PAAPLYZ', () => {
    expect(convert('PAYPALZ', 3)).toBe('PAAPLYZ');
});

test('convert(PAYPALZ, 2) equals PYAZAPL', () => {
    expect(convert('PAYPALZ', 2)).toBe('PYAZAPL');
});

test('convert(PAYPALISHIRING, 3) equals PAHNAPLSIIGYIR', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
});

test('convert(PAYPALISHIRING, 4) equals PINALSIGYAHRPI', () => {
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
});

test('convert(PAYPALISHIRING, 5) equals PHASIYIRPLIGAN', () => {
    expect(convert('PAYPALISHIRING', 5)).toBe('PHASIYIRPLIGAN');
});

test('convert(PAYPALISHIRING, 6) equals PRAIIYHNPSGAIL', () => {
    expect(convert('PAYPALISHIRING', 6)).toBe('PRAIIYHNPSGAIL');
});