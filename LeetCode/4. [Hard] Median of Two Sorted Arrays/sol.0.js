/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b)
  const medianIndex = parseInt(mergedArray.length / 2)

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[medianIndex] + mergedArray[medianIndex - 1]) / 2
  } else {
    return mergedArray[medianIndex]
  }
}
