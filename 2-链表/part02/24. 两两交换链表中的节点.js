/*
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
示例 1：
    输入：head = [1,2,3,4]
    输出：[2,1,4,3]

示例 2：
    输入：head = []
    输出：[]
示例 3：
    输入：head = [1]
    输出：[1]
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let ret = new ListNode(0, head), temp = ret;
    while(temp.next && temp.next.next) {
        let pre = temp.next, cur = temp.next.next;
        pre.next = cur.next;
        cur.next = pre;
        pre = cur;
        temp.next = cur;
    }
    return ret.next;
};