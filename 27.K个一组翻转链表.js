
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    // 辅助函数：反转从head开始长度为k的链表段，并返回新的头结点和尾节点
    function reverseLinkedList(head, k) {
        let prev = null;
        let curr = head;
        let newTail = head; // 翻转后的尾巴就是原始的头部
        for (let i = 0; i < k; i++) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return [prev, newTail]; // 新的头部和旧的头部（即新的尾巴）
    }

    if (!head || !head.next || k <= 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupEnd = dummy;
    let curr = head;

    while (true) {
        let kth = prevGroupEnd;
        for (let i = 0; i < k && kth != null; i++) {
            kth = kth.next;
        }
        if (!kth) break; // 如果没有足够的节点进行反转，则停止

        let nextGroupStart = kth.next;
        let [newHead, newTail] = reverseLinkedList(curr, k);

        // 连接上一段和当前反转后的部分
        prevGroupEnd.next = newHead;
        newTail.next = nextGroupStart;

        // 更新指针以处理下一段
        prevGroupEnd = newTail;
        curr = nextGroupStart;
    }

    return dummy.next;
};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), k = 4;
console.log('reverseKGroup', reverseKGroup(head, k))