
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2; // 注：如果都为空则返回空
    if (list2 === null) return list1;
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
};

// let list1 = [1,2,4], list2 = [1,3,4];
let list1 = new ListNode(1);
let list2 = new ListNode(2);
let list3 = new ListNode(4);

list1.next = list2;
list2.next = list3;

let node1 = new ListNode(1);
let node2 = new ListNode(3);
let node3 = new ListNode(4);

node1.next = node2;
node2.next = node3;

console.log('mergeTwoLists',mergeTwoLists(list1, node1))