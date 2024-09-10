/*
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

    叶子节点 是指没有子节点的节点。
    示例 1  ：
        输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
        输出：[[5,4,11,2],[5,8,4,5]]

    示例 2：
        输入：root = [1,2,3], targetSum = 5
        输出：[]

    示例 3：
        输入：root = [1,2], targetSum = 0
        输出：[]

 */


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode(5);
var b = new TreeNode(4);
var c = new TreeNode(8);
var d = new TreeNode(11);
var e = new TreeNode(13);
var f = new TreeNode(4);
var g = new TreeNode(7);
var h = new TreeNode(2);
var i = new TreeNode(5);
var j = new TreeNode(1);

a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;
d.left = g;
d.right = h;
f.left = i;
f.right = j;
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    //递归方法
    let respath = [], curpath = [];
    // 1. 确定递归函数参数
    const traveltree = function (node, count) {
        curpath.push(node.val);
        count -= node.val;

        if (count === 0 && node.left === null && node.right === null) {
            respath.push([...curpath]);
        }

        node.left && traveltree(node.left, count);
        node.right && traveltree(node.right, count);

        let cur = curpath.pop();
        count -= cur;
    }
    if (root === null) {
        return respath;
    }
    traveltree(root, targetSum);
    return respath;
};
let targetSum = 22;
console.log('pathSum', pathSum(a, targetSum))