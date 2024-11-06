/*
 * 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。
除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。
给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。
    示例 1:
        输入: root = [3,2,3,null,3,null,1]
        输出: 7 
        解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7
    示例 2:
        输入: root = [3,4,5,1,3,null,1]
        输出: 9
        解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var a = new TreeNode(3);
var b = new TreeNode(4);
var c = new TreeNode(5);
var d = new TreeNode(1);
var e = new TreeNode(3);
var f = new TreeNode(1);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
    //后序遍历
    const postOrder = node => {
        // 递归出口
        if (!node) return [0, 0];
        let left = postOrder(node.left);
        let right = postOrder(node.right);

        //不选当前节点
        let noCur = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        //选择当前节点
        let cur = node.val + left[0] + right[0];
        //[不偷， 偷]
        return [noCur, cur];
    }
    let res = postOrder(root);
    console.log('res',res)
    return Math.max(...res);
};

console.log('rob',rob(a))