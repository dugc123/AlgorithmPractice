/**
 * 题意：删除链表中等于给定值 val 的所有节点。

    示例 1： 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]

    示例 2： 输入：head = [], val = 1 输出：[]

    示例 3： 输入：head = [7,7,7,7], val = 7 输出：[]
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const ret = new ListNode(0, head);
    let cur = ret;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return ret.next;
};

let head = [1, 2, 6, 3, 4, 5, 6], val = 6;
let res = removeElements(head, val);
console.log(res);