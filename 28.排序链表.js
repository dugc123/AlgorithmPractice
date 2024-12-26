
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 获取链表中间节点
function getMiddle(head) {
    let slow = head,
        fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// 合并两个有序链表
function merge(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
}

// 归并排序链表
function sortList(head) {
    // 如果链表为空或只有一个节点，则直接返回
    if (!head || !head.next) return head;

    // 找到链表的中点，并将链表分成两部分
    let mid = getMiddle(head);
    let rightHead = mid.next;
    mid.next = null; // 断开链表

    // 递归地对左右两部分进行排序
    let left = sortList(head);
    let right = sortList(rightHead);

    // 合并两个有序链表
    return merge(left, right);
}
let head = new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(6, new ListNode(5)))));
console.log('sortList',sortList(head));