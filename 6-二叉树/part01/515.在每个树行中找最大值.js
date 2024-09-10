/*
 * 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
    示例1：
        输入: root = [1,3,2,5,3,null,9]
        输出: [1,3,9]

    示例2：
    输入: root = [1,2,3]
    输出: [1,3]
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
 * @return {number[]}
 */
var largestValues = function (root) {
    let res = [], queue = [root];
    if (!root) {
        return res;
    }

    while (queue.length) {
        let length = queue.length;
        let max = -Infinity;//负无穷大
        while (length--) {
            //当前节点
            let node = queue.shift();
            max = Math.max(node.val, max);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(max);
    }
    return res;
};

let root = [1, 3, 2, 5, 3, null, 9];
console.log('largestValues', largestValues(root));