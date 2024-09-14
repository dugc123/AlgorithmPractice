/*
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

    百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

    示例 1：
        输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
        输出：3
        解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

    示例 2：
        输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
        输出：5
        解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。

    示例 3：
        输入：root = [1,2], p = 1, q = 2
        输出：1
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
[3,5,1,6,2,0,8,null,null,7,4]
var a = new TreeNode(3);
var b = new TreeNode(5);
var c = new TreeNode(1);
var d = new TreeNode(6);
var e = new TreeNode(2);
var f = new TreeNode(0);
var g = new TreeNode(8);
var h = new TreeNode(7);
var i = new TreeNode(4);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.left = h;
e.right = i;
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

    let travelTree  = function (root, p, q) {
        if (!root || root === p || root === q) {
            return root;
        }

        let left = travelTree(root.left, p, q);
        let right = travelTree(root.right, p, q);

        if (left && right) {
            return root;
        }

        if (left === null) {
            return right;
        }

        return left;
    }

    return travelTree (root, p, q);
};

let root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1;

console.log('lowestCommonAncestor',lowestCommonAncestor(a, p, q))