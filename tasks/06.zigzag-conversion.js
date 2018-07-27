/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let returnS = '';
    for (let i = 0; i < s.length; i += 2 * (numRows - 1)) {
        for (let j = 0; j < numRows; j++) {
            returnS += s[i - j];
            if (s[j]) {
                returnS += s[j];
            }
        }
    }
    return returnS;
};

module.exports = convert;