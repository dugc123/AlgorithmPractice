/*
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
    示例 1:
        输入：root = [4,2,7,1,3,6,9]
        输出：[4,7,2,9,6,3,1]
    示例 2:
        输入：root = [2,1,3]
        输出：[2,3,1]
    示例 3：
        输入：root = []
        输出：[]
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root === null) {
        return root;
    }
    //保存右节点
    const rightNode = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(rightNode);
    return root;
};


console.log('invertTree',invertTree(a))