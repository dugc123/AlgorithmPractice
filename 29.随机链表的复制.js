// 定义链表节点构造函数
function _Node(val) {
    this.val = val;
    this.next = null;
    this.random = null;
}

// 复制随机链表函数
function copyRandomList(head) {
    if (!head) return null;

    let oldToNew = new Map(); // 创建一个映射来保存原节点和新节点之间的对应关系

    // 第一步：创建所有新节点，并建立旧节点到新节点的映射
    let current = head;
    while (current) {
        oldToNew.set(current, new _Node(current.val));
        current = current.next;
    }

    // 第二步：设置新节点的 next 和 random 指针
    current = head;
    while (current) {
        let newNode = oldToNew.get(current);
        newNode.next = oldToNew.get(current.next) || null;
        newNode.random = oldToNew.get(current.random) || null;
        current = current.next;
    }

    // 返回新的链表头节点
    return oldToNew.get(head);
}

let head = [[7,null],[13,0],[11,4],[10,2],[1,0]];
