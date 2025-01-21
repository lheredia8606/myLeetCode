/**
 88. Merge Sorted Array
 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
  representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let newArr = [...nums1];
  let currIndNum1 = 0;
  let currIndNum2 = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (currIndNum2 === nums2.length) {
      nums1[i] = newArr[currIndNum1];
      currIndNum1++;
      continue;
    }

    if (newArr[currIndNum1] <= nums2[currIndNum2]) {
      if (newArr[currIndNum1] === 0 && currIndNum1 >= m) {
        nums1[i] = nums2[currIndNum2];
        currIndNum2++;
      } else {
        nums1[i] = newArr[currIndNum1];
        currIndNum1++;
      }
    } else {
      nums1[i] = nums2[currIndNum2];
      currIndNum2++;
    }
  }
};
