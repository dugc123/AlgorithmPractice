function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0, head); // 创建一个虚拟头节点
    let left = dummyHead, right = dummyHead;

    while(n--) {
        right = right.next;
    }

    while(right.next !== null) {
        left = left.next;
        right = right.next;
    }
    left.next = left.next.next;
    return dummyHead.next;
}

let n = 2;
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log('removeNthFromEnd',JSON.stringify(removeNthFromEnd(head, n)))