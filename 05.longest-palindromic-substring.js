/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) {
        return s;
    }
    const arrayFromString = s.split('');
    let palindromeArray = [];
    let arrayWithRepeatingChars = arrayFromString.filter(function (item, index) {
        return arrayFromString.indexOf(item, index + 1) !== -1;
    });

    arrayWithRepeatingChars = arrayWithRepeatingChars.filter(function (item, index) {
        const nextItemIndex = arrayWithRepeatingChars.indexOf(item, index + 1);
        return nextItemIndex === -1;
    });

    arrayWithRepeatingChars.forEach(function (item) {
        let firstIndex = arrayFromString.indexOf(item);
        let finalIndex = arrayFromString.lastIndexOf(item);
        while (firstIndex > -1 && firstIndex < finalIndex) {
            while (finalIndex > -1 && finalIndex !== firstIndex) {
                const possiblePolindrome = arrayFromString.slice(firstIndex, finalIndex + 1);
                let oddLength = true;
                if (possiblePolindrome.length % 2) {
                    oddLength = false;
                }
                const numOfItemsOnOneSide = Math.floor(possiblePolindrome.length / 2);
                const itemsOnLeft = possiblePolindrome.slice(0, numOfItemsOnOneSide);
                const itemsOnRight = possiblePolindrome.slice(oddLength ? numOfItemsOnOneSide : numOfItemsOnOneSide + 1, finalIndex + 1);
                const leftString = itemsOnLeft.join('');
                const rightString = itemsOnRight.reverse().join('');
                if (leftString === rightString) {
                    if (possiblePolindrome.length > palindromeArray.length) {
                        palindromeArray = possiblePolindrome;
                    }
                }
                finalIndex = arrayFromString.lastIndexOf(item, finalIndex - 1);
            }
            firstIndex = arrayFromString.indexOf(item, firstIndex + 1);
            finalIndex = arrayFromString.lastIndexOf(item);
        }
    });
    return palindromeArray.join('') || arrayFromString[0];
};

// console.log(longestPalindrome('dbagabbaagaab'));
// console.log(longestPalindrome('cbbd'));
// console.log(longestPalindrome('bb'));
// console.log(longestPalindrome('babad'));
console.log(longestPalindrome('abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa'));

