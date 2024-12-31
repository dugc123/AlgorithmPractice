
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
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
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) return null;

    let result = null;

    for (let list of lists) {
        result = mergeTwoLists(result, list);
    }
    console.log('result',result)
    return result;


    // return lists.reduce((p, n) => {
    //     while (n) {
    //         p.push(n), n = n.next
    //     }
    //     return p
    // },[]).sort((a, b) => a.val - b.val).reduceRight((p, n) => {
    //     n.next = p
    //     return n
    // }, null);
};

let list = [[new ListNode(1, new ListNode(4, new ListNode(5))),new ListNode(1, new ListNode(3, new ListNode(4))),new ListNode(2, new ListNode(6))]]
console.log('mergeKLists',mergeKLists(list))