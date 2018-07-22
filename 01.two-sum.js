var twoSum = function(nums, target) {
    var secondIndex = null;
    var foundItem = nums.find(function(num, index) {
        var indexOfTest = nums.indexOf(target - num);
        if (indexOfTest !== index && indexOfTest !== -1) {
            secondIndex = indexOfTest;
            return true;
        }
    });
    var firstIndex = nums.indexOf(foundItem);
    // Case, where two items are the same value
    // e.g. [3,3] 6
    if (firstIndex === secondIndex) {
        secondIndex = nums.indexOf(foundItem, firstIndex + 1);
    }
    return [firstIndex, secondIndex];
};

console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 3, 2, 3], 5));
console.log(twoSum([3, 1, 0, 7], 8));
