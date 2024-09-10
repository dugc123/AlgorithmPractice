/*
 * 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。

    你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。

    示例 1:
        输入：root = [4,2,7,1,3], val = 2
        输出：[2,1,3]

    示例 2:
        输入：root = [4,2,7,1,3], val = 5
        输出：[]
 */


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode(4);
var b = new TreeNode(2);
var c = new TreeNode(7);
var d = new TreeNode(1);
var e = new TreeNode(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root || root.val === val) {
        return root;
    }

    if (root.val > val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};

let root = [4,2,7,1,3], val = 2;
console.log('searchBST',searchBST(a, val));