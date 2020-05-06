// Definition for a binary tree node.
/**
 *
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} min
 * @param {TreeNode} max
 * @return {boolean}
 */
var isValidBST = function (root, min = null, max = null) {
  /** @type {TreeNode[]} */

  if (!root) return true
  if (min !== null && root.val <= min.val) return false
  if (max !== null && root.val >= max.val) return false

  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max)
}
