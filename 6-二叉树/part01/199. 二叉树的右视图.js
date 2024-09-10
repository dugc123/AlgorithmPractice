/*
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
    示例 1:
        输入: [1,2,3,null,5,null,4]
        输出: [1,3,4]

    示例 2:
        输入: [1,null,3]
        输出: [1,3]

    示例 3:
        输入: []
        输出: []
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

a.left = b;
a.right = c;
b.right = e;
c.right = d;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let res = [], queue = [];
    queue.push(root);

    while(queue.length && root) {
        let len = queue.length;
        while(len--) {
            let node = queue.shift();
            //当len等于0时，说明该层级已经遍历完
            if (!len) {
                res.push(node.val);
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }   
    return res;
};

//[1,3,4]
console.log('rightSideView',rightSideView(a));