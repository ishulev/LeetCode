/**
 * @param {number} x
 * @return {number}
 */
const MAX_INT = Math.pow(2, 31) -1;
const MIN_INT = -MAX_INT;

function isOverflowing(int) {
    return int > MAX_INT || int < MIN_INT;
}

var reverse = function(x) {
    if(isOverflowing(x)) {
        return 0;
    }
    const splitIntToArray = (x + '').split('');
    let reversedInt = 0;
    if (x < 0) {
        splitIntToArray.shift();
        reversedInt = - splitIntToArray.reverse().join('');
    }
    else {
        reversedInt = + splitIntToArray.reverse().join('');
    }
    if(isOverflowing(reversedInt)) {
        return 0;
    }
    return reversedInt;
};

module.exports = reverse;

