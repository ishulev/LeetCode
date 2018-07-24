/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   if (s.length === 1) {
//     return s;
//   }
//   let palindrome = '';
//   let arrayWithRepeatingChars = [];

//   for (var i = 0; i < s.length; i++) {
//     const item = s[i];
//     if (s.indexOf(item, i + 1) !== -1) {
//       arrayWithRepeatingChars += item;
//     }
//   }

//   //   if (s.length === arrayWithRepeatingChars.length + 1) {
//   //     return s;
//   //   }
//   // arrayWithRepeatingChars = arrayFromString.filter(function (item, index) {
//   //     return arrayFromString.indexOf(item, index + 1) !== -1;
//   // });
//   //   const arrayFromString = s.split('');

//   arrayWithRepeatingChars = arrayWithRepeatingChars
//     .split('')
//     .filter(function(item, index) {
//       const nextItemIndex = arrayWithRepeatingChars.indexOf(item, index + 1);
//       return nextItemIndex === -1;
//     });

//   let outerWhileCounter = 0;
//   let innerWhileCounter = 0;

//   //   arrayWithRepeatingChars = Array.from(new Set(Array.from(arrayWithRepeatingChars)));

//   arrayWithRepeatingChars.forEach(function(item) {
//     //   console.log(item);
//     let firstIndex = s.indexOf(item);
//     let finalIndex = s.lastIndexOf(item);
//     while (firstIndex > -1 && firstIndex < finalIndex) {
//       while (finalIndex > -1 && finalIndex !== firstIndex) {
//         const possiblePolindrome = s.substring(firstIndex, finalIndex + 1);
//         let oddLength = true;
//         if (possiblePolindrome.length % 2) {
//           oddLength = false;
//         }
//         const numOfItemsOnOneSide = Math.floor(possiblePolindrome.length / 2);
//         const itemsOnLeft = possiblePolindrome.substring(
//           0,
//           numOfItemsOnOneSide
//         );
//         const itemsOnRight = possiblePolindrome.substring(
//           oddLength ? numOfItemsOnOneSide : numOfItemsOnOneSide + 1,
//           finalIndex + 1
//         );
//         if (itemsOnLeft === reverseString(itemsOnRight)) {
//           if (possiblePolindrome.length > palindrome.length) {
//             palindrome = possiblePolindrome;
//           }
//         }
//         finalIndex = s.lastIndexOf(item, finalIndex - 1);
//         innerWhileCounter++;
//       }
//       firstIndex = s.indexOf(item, firstIndex + 1);
//       finalIndex = s.lastIndexOf(item);
//       outerWhileCounter++;
//     }
//   });
//   console.log('OUTER =>> ', outerWhileCounter);
//   console.log('INNER =>> ', innerWhileCounter);
//   return palindrome || s[0];
// };

// function reverseString(str) {
//   let returnString = '';
//   for (var i = str.length - 1; i >= 0; i--) {
//     returnString += str[i];
//   }
//   return returnString;
// }

var longestPalindrome = function(s) {
  let palindrome = '';
  for (var centerIndex = 0; centerIndex < s.length; centerIndex++) {
    for(var i = 0; i < 2; i++) {
      let left = centerIndex;
      let right = centerIndex + i;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      const possiblePalindrome = s.substring(left + 1, right);
      if (possiblePalindrome.length > palindrome.length) {
        palindrome = possiblePalindrome;
      }
    }
  }
  return palindrome;
};

console.log(longestPalindrome('dbagabbaagaab'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('bb'));
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('aaaabaaa'));
console.log(longestPalindrome('abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa'));
// console.log(
//   longestPalindrome(
//     'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
//   )
// );
// console.log(
//   longestPalindrome(
//     '321012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210123210012321001232100123210123'
//   )
// );
