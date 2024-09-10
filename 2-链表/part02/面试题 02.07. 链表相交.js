/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
 */

/**
 * 计算链表的长度
 */
var getListLen = function (head) {
    let len = 0, cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    return len;
}
var getIntersectionNode = function (headA, headB) {
    let curA = headA, curB = headB,
        lenA = getListLen(headA),
        lenB = getListLen(headB);
    if (lenA < lenB) { //让curA为最长链表的头，lenA为其长度
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }
    let i = lenA - lenB;
    while(i) {
        curA = curA.next;
    }
    while(curA && curA !== curB) {
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
}