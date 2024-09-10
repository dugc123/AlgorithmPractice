/*
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

    叶子节点 是指没有子节点的节点。

    示例 1：
        输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
        输出：true
        解释：等于目标和的根节点到叶节点路径如上图所示。

    示例 2：
        输入：root = [1,2,3], targetSum = 5
        输出：false
        解释：树中存在两条根节点到叶子节点的路径：
        (1 --> 2): 和为 3
        (1 --> 3): 和为 4
        不存在 sum = 5 的根节点到叶子节点的路径。
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]
var a = new TreeNode(5);
var b = new TreeNode(4);
var c = new TreeNode(8);
var d = new TreeNode(11);
var e = new TreeNode(13);
var f = new TreeNode(4);
var g = new TreeNode(7);
var h = new TreeNode(2);
var i = new TreeNode(1);


//         5
//       4     8
//    11     13   4
//   7    2           1
a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;
d.left = g;
d.right = h;
f.right = i;

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // // 递归法
    // const traversal = (node, cnt) => {
    //     // 遇到叶子节点，并且计数为0
    //     if (cnt === 0 && !node.left && !node.right) return true;
    //     // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
    //     if (!node.left && !node.right) return false;

    //     //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
    //     if (node.left && traversal(node.left, cnt - node.left.val)) return true;
    //     //  右（空节点不遍历）
    //     if (node.right && traversal(node.right, cnt - node.right.val)) return true;
    //     return false;
    // };
    // if (!root) return false;
    // return traversal(root, targetSum - root.val);

    // 精简代码:
    if (!root) return false;
    if (!root.left && !root.right && targetSum === root.val) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

let targetSum = 22;
console.log('hasPathSum', hasPathSum(a, targetSum))