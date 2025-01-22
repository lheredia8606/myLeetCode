/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length <= 1) {
    return [nums];
  }
  let toReturn = [];
  for (let i = 0; i < nums.length; i++) {
    let combinations = permute([...nums.slice(0, i), ...nums.slice(i + 1)]);
    for (let j = 0; j < combinations.length; j++) {
      toReturn.push([nums[i], ...combinations[j]]);
    }
  }
  return toReturn;
};

console.log(permute([1, 2, 3]));
