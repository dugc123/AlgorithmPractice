/*
 * 给定一个二叉树，找出其最小深度。

    最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

    说明：叶子节点是指没有子节点的节点。

    示例 1：
        输入：root = [3,9,20,null,null,15,7]
        输出：2

    示例 2：
        输入：root = [2,null,3,null,4,null,5,null,6]
        输出：5
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode("3");
var b = new TreeNode("9");
var c = new TreeNode("20");
var d = new TreeNode("15");
var e = new TreeNode("7");

a.left = b;
a.right = c;
c.left = d;
c.right = e;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    let min = 0
    if (root === null) {
        return min;
    }

    let queue = [root];
    while(queue.length) {
        min++;
        let len = queue.length;
        while(len--) {
            let node = queue.shift();

            if (node.left === null &&  node.right === null) {
                return min;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return min;
};

console.log('minDepth',minDepth(a))