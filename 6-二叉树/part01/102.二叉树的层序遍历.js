/**
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
    示例 1：
        输入：root = [3,9,20,null,null,15,7]
        输出：[[3],[9,20],[15,7]]
    
    示例 2：
        输入：root = [1]
        输出：[[1]]
    示例 3：
        输入：root = []
        输出：[]
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var a = new TreeNode("3");
var b = new TreeNode("9");
var c = new TreeNode("20");
var d = new TreeNode("15");
var e = new TreeNode("7");

a.left = b;
a.right = c;
c.left = d;
c.right = e;

//二叉树的层序遍历
var levelOrder = function (root) {
    let res = [], queue = [];
    queue.push(root);
    if (root === null) {
        return res;
    }
    while (queue.length) {
        // 记录当前层级节点数
        let length = queue.length;
        //存放每一层的节点
        let curLevel = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val)
            
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(curLevel);
    }
    return res;
};

console.log('levelOrder', levelOrder(a))