
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * 两个指针：一个快指针和一个慢指针。快指针每次移动两步，而慢指针每次移动一步。
 * 如果链表中有环，那么这两个指针最终会在环内相遇；如果没有环，快指针将到达链表的末尾（即 null）。
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true; // 环存在
    }

    return false; // 无环
};