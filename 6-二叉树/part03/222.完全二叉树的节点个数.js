/*
 * 给出一个完全二叉树，求出该树的节点个数。

    示例 1：
        输入：root = [1,2,3,4,5,6]
        输出：6

    示例 2：
        输入：root = []
        输出：0

    示例 3：
        输入：root = [1]
        输出：1
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode("1");
var b = new TreeNode("2");
var c = new TreeNode("3");
var d = new TreeNode("4");
var e = new TreeNode("5");
var f = new TreeNode("6");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    const getNodeSum = function (node) {
        if (node === null) {
            return 0;
        }
        let leftNum = getNodeSum(node.left);
        let rightNum = getNodeSum(node.right);
        return leftNum + rightNum + 1;
    }

    return getNodeSum(root);
};

var countNodes2 = function (root) {
    if (root === null) {
        return 0;
    }
    let queue = [root], num = 0;
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let node = queue.shift();
            num++;

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }

    return num;
};

console.log('countNodes', countNodes2(a))