/**
     Given a pattern and a string s, find if s follows the same pattern.

    Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

    Each letter in pattern maps to exactly one unique word in s.
    Each unique word in s maps to exactly one letter in pattern.
    No two letters map to the same word, and no two words map to the same letter.
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ");
  const patMap = new Map();
  const sMap = new Map();
  if (pattern.length !== s.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (!patMap.get(pattern[i]) && !sMap.get(s[i])) {
      patMap.set(pattern[i], s[i]);
      sMap.set(s[i], pattern[i]);
    } else if (
      patMap.get(pattern[i]) !== s[i] ||
      sMap.get(s[i]) !== pattern[i]
    ) {
      return false;
    }
  }
  return true;
};
