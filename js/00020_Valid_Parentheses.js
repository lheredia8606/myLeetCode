/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let pairs = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (pairs.get(s[i])) {
      stack.push(s[i]);
      continue;
    } else {
      let popped = stack.pop();
      if (pairs.get(popped) !== s[i]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) return false;
  return true;
};
