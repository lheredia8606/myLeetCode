/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length < 3) {
    return nums[0];
  }
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
      if (map.get(nums[i]) >= nums.length / 2) {
        return nums[i];
      }
    } else {
      map.set(nums[i], 1);
    }
  }
};
