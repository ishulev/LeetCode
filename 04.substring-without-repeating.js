/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const stringToArray = s.split('');
    let arrayOfUniqueCharacters = [];
    let maxLength = 0;

    stringToArray.forEach(function (item, index) {
        const firstIndexOfRepeatElem = arrayOfUniqueCharacters.indexOf(item);
        if (firstIndexOfRepeatElem !== -1) {
            arrayOfUniqueCharacters = arrayOfUniqueCharacters.slice(firstIndexOfRepeatElem + 1);
        }
        arrayOfUniqueCharacters.push(item);
        if (arrayOfUniqueCharacters.length > maxLength) {
            maxLength = arrayOfUniqueCharacters.length;
        }
    });
    return maxLength;
};

console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('bbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('bpfbhmipx'));