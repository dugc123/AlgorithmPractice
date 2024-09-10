/*
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

    假设二叉树中至少有一个节点。
    示例 1:
        输入: root = [2,1,3]
        输出: 1

    示例 2:
        输入: [1,2,3,4,null,5,6,null,null,7]
        输出: 7
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode("2");
var b = new TreeNode("1");
var c = new TreeNode("3");


a.left = b;
a.right = c;


/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    if (root === null) {
        return root;
    }

    let queue = [root], res;
    while(queue.length) {
        let len = queue.length;

        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            console.log('node.val',node.val, i)
            if (i === 0) {
                res = node.val;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            
        }
    }
    return res;
};

console.log('findBottomLeftValue',findBottomLeftValue(a))