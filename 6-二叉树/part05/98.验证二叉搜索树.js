/*
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

    有效 二叉搜索树定义如下：
        节点的左子树只包含 小于 当前节点的数。
        节点的右子树只包含 大于 当前节点的数。
        所有左子树和右子树自身必须也是二叉搜索树。

    示例 1：
        输入：root = [2,1,3]
        输出：true
    示例 2：
        输入：root = [5,1,4,null,null,3,6]
        输出：false
        解释：根节点的值是 5 ，但是右子节点的值是 4 
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
[2,1,3]
var a = new TreeNode(2);
var b = new TreeNode(1);
var c = new TreeNode(3);

a.left = b;
a.right = c;

/**
 * 中序排列，数字从小到大则为二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let arr = [];
    const buildArr = (root) => {
        if (root) {
            buildArr(root.left);
            arr.push(root.val);
            buildArr(root.right);
        }
    }
    buildArr(root);
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }

    return true;
};
console.log('isValidBST',isValidBST(a))