// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode()
  let current = result
  let pass = 0
  let sum = 0

  while (true) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + pass
    pass = parseInt(sum / 10)

    current.val = sum - 10 * pass

    if ((!l1 || !l1.next) && (!l2 || !l2.next) && pass === 0) {
      break
    } else {
      l1 = l1 && l1.next
      l2 = l2 && l2.next

      current.next = new ListNode()
      current = current.next
    }
  }

  return result
}
