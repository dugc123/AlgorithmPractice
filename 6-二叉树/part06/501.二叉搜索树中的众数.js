/*
 * 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。

    如果树中有不止一个众数，可以按 任意顺序 返回。

    假定 BST 满足如下定义：

    结点左子树中所含节点的值 小于等于 当前节点的值
    结点右子树中所含节点的值 大于等于 当前节点的值
    左子树和右子树都是二叉搜索树

    示例 1：
        输入：root = [1,null,2,2]
        输出：[2]

    示例 2：
        输入：root = [0]
        输出：[0]
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(2);

a.right = b;
b.left = c;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    let res = [], map = new Map();
    const buildArr = (root) => {
        if (!root) {
            return;
        }
        buildArr(root.left);
        map.set(root.val, map.has(root.val) ? map.get(root.val) + 1 : 1);
        buildArr(root.right);
    }
    buildArr(root);

    let maxCount = map.get(root.val);
    for (const [key, val] of map) {
        //如果root的val值等于最大值
        if (maxCount === val) {
            res.push(key);
        }

        //如果当前值大于maxCount，将res置为空，并且重新赋值maxCount
        if (val > maxCount) {
            res = [];
            maxCount = val;
            res.push(key)
        }
    }
    return res;
};

console.log('findMode(a)',findMode(a))