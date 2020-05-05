/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let record = {}
  let max = 0
  let b = 0
  let i = 0

  while (i < s.length) {
    const char = s[i]

    if (record[char] === undefined) {
      record[char] = i
      i += 1
    } else {
      b = i = record[char] + 1
      record = {}
    }

    max = Math.max(max, i - b)

    // console.log(JSON.stringify(record, null, 2))
    // console.log(`b: ${b}, i: ${i}`)
  }

  return max
}

console.log(lengthOfLongestSubstring('abcabcbb'), 3)
console.log(lengthOfLongestSubstring('bbbbb'), 1)
console.log(lengthOfLongestSubstring('pwwkew'), 3)
console.log(lengthOfLongestSubstring(' '), 1)
console.log(lengthOfLongestSubstring('dvdf'), 3)
