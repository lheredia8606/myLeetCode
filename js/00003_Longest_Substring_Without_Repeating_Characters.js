/**
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.


/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) {
    return 1;
  }
  let charSet = new Set();
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    if (longest >= s.length - i) {
      break;
    }
    charSet.clear();
    for (let j = i; j < s.length; j++) {
      if (!charSet.has(s[j])) {
        charSet.add(s[j]);
      } else {
        break;
      }
    }
    if (charSet.size > longest) {
      longest = charSet.size;
    }
  }
  return longest;
};
