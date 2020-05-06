/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = []

  let i = 0
  let j = 0

  while (i < nums1.length || j < nums2.length) {
    const a = nums1[i]
    const b = nums2[j]

    if ((a !== undefined && b === undefined) || a <= b) {
      mergedArray.push(a)
      i += 1
    } else if ((a === undefined && b !== undefined) || a > b) {
      mergedArray.push(b)
      j += 1
    }
  }

  const medianIndex = parseInt(mergedArray.length / 2)

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[medianIndex] + mergedArray[medianIndex - 1]) / 2
  } else {
    return mergedArray[medianIndex]
  }
}
