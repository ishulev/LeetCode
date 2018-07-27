/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // This is for edge cases, where string length is less than rows, rows are less than 2 or string has length of 1
    if(s.length < numRows || numRows < 2 || s.length < 2) {
        return s;
    }
    let returnS = '';
    // Loop over rows
    for (let j = 0; j < numRows; j++) {
        for (let i = j; i < s.length; i += 2 * (numRows - 1)) {
            returnS += s[i];
            if (j !== 0 && j < numRows - 1) {
                const intermediateIndex = i + 2 * (numRows - j - 1);
                if (s[intermediateIndex]) {
                    returnS += s[intermediateIndex];
                }
            }
        }
    }
    return returnS;
};

module.exports = convert;