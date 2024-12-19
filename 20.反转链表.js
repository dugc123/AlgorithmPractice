

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * 双指针解法
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
        pre = cur; //向右移位
        cur = temp; //向右移位
    }
    return pre;
};

let arr = [1, 2, 3, 4, 5, null];
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log('head', head)
console.log('reverse', reverseList(head));