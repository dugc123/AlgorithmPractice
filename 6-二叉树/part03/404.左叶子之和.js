/*
 * 给定二叉树的根节点 root ，返回所有左叶子之和。

    示例 1：
        输入: root = [3,9,20,null,null,15,7] 
        输出: 24 
    解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

    示例 2:
        输入: root = [1]
        输出: 0
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode(3);
var b = new TreeNode(9);
var c = new TreeNode(20);
var d = new TreeNode(15);
var e = new TreeNode(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;


/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    const nodesSum = function(node) {
        if (node === null) {
            return 0;
        }
        let midValue  = 0;
        if (node.left && node.left.left === null && node.left.right === null) {
            midValue = (node.left.val || 0);
        }

        let leftNum = nodesSum(node.left);
        let rightNum = nodesSum(node.right);

        return midValue + leftNum + rightNum;
    }

    return nodesSum(root);
};

console.log('sumOfLeftLeaves',sumOfLeftLeaves(a))