class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * pA走到头后，跳到headB
 * pB走到头后，跳到heaA
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    var pA = headA;
    var pB = headB;

    while(pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }
    return pA;
};

// 创建相交部分
var intersectNode = new ListNode(8, new ListNode(4, new ListNode(5)));

// 创建链表 A: 4 -> 1 -> 8 -> 4 -> 5
var headA = new ListNode(4, new ListNode(1, intersectNode));

// 创建链表 B: 5 -> 6 -> 1 -> 8 -> 4 -> 5
var headB = new ListNode(5, new ListNode(6, new ListNode(1, intersectNode)));
console.log('getIntersectionNode', getIntersectionNode(headA, headB));