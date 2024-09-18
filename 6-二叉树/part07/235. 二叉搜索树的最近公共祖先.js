/*
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

    百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

    例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

    示例 1:
        输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
        输出: 6 
        解释: 节点 2 和节点 8 的最近公共祖先是 6。

    示例 2:
        输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
        输出: 2
        解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(6);
var b = new TreeNode(2);
var c = new TreeNode(8);
var d = new TreeNode(0);
var e = new TreeNode(4);
var f = new TreeNode(7);
var g = new TreeNode(9);
var h = new TreeNode(3);
var i = new TreeNode(5);

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
    while(root) {
        if(root.val > p.val && root.val > q.val) {
            root = root.left;
        }else if(root.val < p.val && root.val < q.val) {
            root = root.right;
        }else {
            return root;
        }
    }
    return null;
};

let p = 0, q = 8;

console.log('lowestCommonAncestor',lowestCommonAncestor(a, p, q))