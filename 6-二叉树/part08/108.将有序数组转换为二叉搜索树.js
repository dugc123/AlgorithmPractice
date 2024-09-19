/*
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵平衡二叉搜索树。

    示例 1：
        输入：nums = [-10,-3,0,5,9]
        输出：[0,-3,9,-10,null,5]
        解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

    示例 1：
        输入：nums = [1,3]
        输出：[3,1]
        解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const buildTree = (Arr, left, right) => {
        if (left > right) {
            return null;
        }
        let middle = Math.floor(left + (right - left)/2);

        let node = new TreeNode(Arr[middle]);

        node.left = buildTree(Arr, left, middle - 1);
        node.right = buildTree(Arr, middle + 1, right);

        return node;

    }

    return buildTree(nums, 0, nums.length - 1);
};
let nums = [-10,-3,0,5,9];
console.log('sortedArrayToBST',sortedArrayToBST(nums))