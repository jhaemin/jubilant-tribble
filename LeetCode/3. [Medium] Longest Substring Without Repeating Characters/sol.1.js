/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let hash = {}
  let max = 0
  let b = 0

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i]

    if (hash[char] >= b) {
      b = hash[char] + 1
    }

    max = Math.max(max, i - b + 1)
    hash[char] = i
  }

  return max
}

console.log('abcabcbb', lengthOfLongestSubstring('abcabcbb'), 3)
console.log('bbbbb', lengthOfLongestSubstring('bbbbb'), 1)
console.log('pwwkew', lengthOfLongestSubstring('pwwkew'), 3)
console.log(' ', lengthOfLongestSubstring(' '), 1)
console.log('dvdf', lengthOfLongestSubstring('dvdf'), 3)
console.log('dvcacf', lengthOfLongestSubstring('dvcacf'), 4)
