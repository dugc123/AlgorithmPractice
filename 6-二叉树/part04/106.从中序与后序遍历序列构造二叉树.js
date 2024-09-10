/*
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

    示例 1:
        输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
        输出：[3,9,20,null,null,15,7]

    示例 2:
        输入：inorder = [-1], postorder = [-1]
        输出：[-1]
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (!inorder.length) {
        return null;
    }
    let rootVal = postorder.pop();
    let inx = inorder.indexOf(rootVal);
    let root = new TreeNode(rootVal);
    root.left = buildTree(inorder.slice(0, inx), postorder.slice(0, inx));
    root.right = buildTree(inorder.slice(inx + 1), postorder.slice(inx));

    return root;
};

let inorder = [9,3,15,20,7], postorder = [9,15,7,20,3];
console.log('buildTree',buildTree(inorder, postorder))