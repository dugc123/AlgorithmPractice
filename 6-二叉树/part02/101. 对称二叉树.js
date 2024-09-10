/*
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。

    示例 1：
        输入：root = [1,2,2,3,4,4,3]
        输出：true

    示例 1：
        输入：root = [1,2,2,null,3,null,3]
        输出：false
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
var e = new TreeNode("4");
var f = new TreeNode("4");
var g = new TreeNode("3");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    const compareNode = function(left, right) {
        if ((left === null && right !== null) || (left !== null && right === null)) {
            return false;
        } else if(left === null && right === null) {
            return true;
        } else if(left.val !== right.val) {
            return false;
        }

        let outSide = compareNode(left.left, right.right);
        let inSide = compareNode(left.right, right.left);

        return outSide && inSide;
    }

    return compareNode(root.left, root.right);
};

console.log('isSymmetric',isSymmetric(a))