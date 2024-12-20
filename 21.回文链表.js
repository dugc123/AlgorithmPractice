

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) {
        return false;
    }

    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))));
console.log('isPalindrome',isPalindrome(head));