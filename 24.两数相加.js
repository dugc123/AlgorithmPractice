/**
 *  输入：l1 = [2,4,3], l2 = [5,6,4]
    输出：[7,0,8]
    解释：342 + 465 = 807.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0); // 创建一个虚拟头节点
    let p = l1, q = l2, current = dummyHead;
    let carry = 0; // 进位

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    return dummyHead.next;
};

let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))) )));
let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

console.log('addTwoNumbers',JSON.stringify(addTwoNumbers(l1, l2)))