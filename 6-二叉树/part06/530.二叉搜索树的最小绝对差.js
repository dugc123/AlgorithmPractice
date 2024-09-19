/*
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

    差值是一个正数，其数值等于两值之差的绝对值。

    示例 1：
        输入：root = [4,2,6,1,3]
        输出：1

    示例 2：
        输入：root = [1,0,48,null,null,12,49]
        输出：1
 */


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
[4,2,6,1,3]
var a = new TreeNode(4);
var b = new TreeNode(2);
var c = new TreeNode(6);
var d = new TreeNode(1);
var e = new TreeNode(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
/**
 * 递归 先转换为有序数组
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let res = [];
    //中序遍历
    const buildArr = (root) => {
        if (!root) {
            return;
        }

        buildArr(root.left);
        res.push(root.val);
        buildArr(root.right);
    }

    buildArr(root);

    let min = res[res.length - 1];

    for (let i = 0; i < res.length - 1; i++) {
        if (Math.abs(res[i + 1] - res[i]) < min) {
            min = Math.abs(res[i + 1] - res[i])
        }
    }
    return min;
};

console.log('getMinimumDifference',getMinimumDifference(a));
