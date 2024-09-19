/*
 * 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

    提醒一下，二叉搜索树满足下列约束条件：

    节点的左子树仅包含键 小于 节点键的节点。
    节点的右子树仅包含键 大于 节点键的节点。
    左右子树也必须是二叉搜索树。
    注意：本题和 1038: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/ 相同

    示例 1：
        输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
        输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

    示例 2：
        输入：root = [0,null,1]
        输出：[1,null,1]

    示例 3：
        输入：root = [1,0,2]
        输出：[3,3,2]

    示例 4：
        输入：root = [3,2,4,1]
        输出：[7,9,4,10]
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode(1);
var b = new TreeNode(0);
var c = new TreeNode(2);


a.left = b;
a.right = c;

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let pre = 0;
    const ReverseInOrder = (cur) => {
        if(cur) {
            ReverseInOrder(cur.right);
            cur.val += pre;
            pre = cur.val;
            ReverseInOrder(cur.left);
        }
    }
    ReverseInOrder(root);
    return root;
};

convertBST(a)