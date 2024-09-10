/*
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。

    本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

    示例 1:
        给定二叉树 [3,9,20,null,null,15,7]
        返回 true

    示例 2:
        给定二叉树 [1,2,2,3,3,null,null,4,4]
        返回 false
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode("1");
var b = new TreeNode("2");
var c = new TreeNode("2");
var d = new TreeNode("3");
var e = new TreeNode("3");
var f = new TreeNode("4");
var g = new TreeNode("4");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
d.left = f;
d.right = g;

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    const getDept = function (node) {
        if (node === null) {
            return 0;
        }

        let leftDept = getDept(node.left);//左子树高度
        if (leftDept === -1) {
            return -1;
        }
        let rightDept = getDept(node.right);//右子树高度
        if (rightDept === -1) {
            return -1;
        }

        if (Math.abs(leftDept - rightDept) > 1) {
            return -1;
        } else {
            return 1 + Math.max(leftDept, rightDept);
        }
    }

    return !(getDept(root) === -1);
};

console.log('isBalanced', isBalanced(a))