/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let returnS = '';
    for (let j = 0; j < numRows; j++) {
        for (let i = j; i < s.length; i += 2 * (numRows - 1)) {
            returnS += s[i];
            if (j !== 0 && j < numRows - 1) {
                const intermediateIndex = i + 2 * j;
                if (s[intermediateIndex]) {
                    returnS += s[intermediateIndex];
                }
            }
        }
    }
    return returnS;
};

module.exports = convert;