/*
 * 给你两棵二叉树： root1 和 root2 。

    想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。

    返回合并后的二叉树。

    注意: 合并过程必须从两个树的根节点开始。

    示例 1：
        输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
        输出：[3,4,5,5,4,null,7]

    示例 2：
        输入：root1 = [1], root2 = [1,2]
        输出：[2,2]
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
var a = new TreeNode(1);
var b = new TreeNode(3);
var c = new TreeNode(2);
var d = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;

var a1 = new TreeNode(2);
var b1 = new TreeNode(1);
var c1 = new TreeNode(3);
var d1 = new TreeNode(4);
var e1 = new TreeNode(7);

a1.left = b1;
a1.right = c1;
b1.right = d1;
c1.right = e1
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    const preOrder = (root1, root2) => {
        if (!root1) return root2
        if (!root2) return root1;

        root1.val += root2.val;
        root1.left = preOrder(root1.left, root2.left);
        root1.right = preOrder(root1.right, root2.right);

        return root1;
    }

    return preOrder(root1, root2);
};

console.log('mergeTrees',mergeTrees(a, a1))