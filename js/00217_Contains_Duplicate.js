/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let arrSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (arrSet.has(nums[i])) {
      return true;
    }
    arrSet.add(nums[i]);
  }
  return false;
};
