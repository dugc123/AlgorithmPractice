/*
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。

    说明: 叶子节点是指没有子节点的节点。

    示例 1：
        输入：root = [1,2,3,null,5]
        输出：["1->2->5","1->3"]

    示例 2：
        输入：root = [1]
        输出：["1"]
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode("1");
var b = new TreeNode("2");
var c = new TreeNode("3");
var d = new TreeNode("5");


a.left = b;
a.right = c;
b.right = d;

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let res = [];

    const getPath = function (node, str) {
        if(node.left === null && node.right === null) {
            str += node.val;
            console.log('str',str)
            res.push(str);
            return res;
        }

        str += node.val + '->';
        node.left && getPath(node.left, str);
        node.right && getPath(node.right, str);
    }
    getPath(root, '');
    return res;
};

console.log('binaryTreePaths',binaryTreePaths(a))