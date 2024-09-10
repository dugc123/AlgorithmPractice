/*
 * 给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10^-5 以内的答案可以被接受。
    示例一：
        输入：root = [3,9,20,null,null,15,7]
        输出：[3.00000,14.50000,11.00000]
        解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
        因此返回 [3, 14.5, 11] 。

    示例二：
        输入：root = [3,9,20,15,7]
        输出：[3.00000,14.50000,11.00000]
 */


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//[3,9,20,null,null,15,7]
var a = new TreeNode(3);
var b = new TreeNode(9);
var c = new TreeNode(20);
var d = new TreeNode(15);
var e = new TreeNode(7);

a.left = b;
a.right = c;
c.left = e;
c.right = d;
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let res = [], queue = [];
    queue.push(root);
    if (root === null) {
        return res;
    }
    
    while(queue.length) {
        let len = queue.length, tempLen = queue.length;
        let sum = 0;
        while(len--) {
            let node = queue.shift();
            sum += node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(sum/tempLen);
    }
    return res;
};
console.log('averageOfLevels',averageOfLevels(a))