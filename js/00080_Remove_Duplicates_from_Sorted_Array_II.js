/*
80. Remove Duplicates from Sorted Array II
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let currentIndex = 0;
  let currentValue = null;
  let currentCount = 0; //number of occurrences of currentValue in nums
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== currentValue) {
      nums[currentIndex] = nums[i];
      currentIndex++;
      currentValue = nums[i];
      currentCount = 1;
      continue;
    } else if (nums[i] === currentValue && currentCount < 2) {
      nums[currentIndex] = nums[i];
      currentIndex++;
      currentCount++;
      continue;
    }
  }
  return currentIndex;
};
