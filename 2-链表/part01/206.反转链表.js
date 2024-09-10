/**
 * 题意：反转一个单链表。

示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let pre = null, cur = head, temp = null;
    while (cur !== null) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
};

console.log('reverseList', reverseList([1, 2, 3, 4, 5, null]))


//第二种方法，递归
var reverse = function (pre, cur) {
    if (!cur) return pre;
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    return reverse(pre, temp);
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    return reverse(null, head);
};