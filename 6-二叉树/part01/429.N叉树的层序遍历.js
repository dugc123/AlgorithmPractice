/*
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

    树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

    示例 1：
        输入：root = [1,null,3,2,4,null,5,6]
        输出：[[1],[3,2,4],[5,6]]
    
    示例 2：
        输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
        输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 */

function TreeNode(val, children) {
    this.val = val;
    this.children = children;
};

var a = new TreeNode("1", []);
var b = new TreeNode("2", []);
var c = new TreeNode("3", []);
var d = new TreeNode("4", []);
var e = new TreeNode("5", []);
var f = new TreeNode("6", []);

// [1, null, 3, 2, 4, null, 5, 6]

a.children = [c, b, d];
b.children = [e, f];

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [], queue = [];
    queue.push(root);
    if (root === null) {
        return res;
    }
    while (queue.length && root) {
        let length = queue.length;
        //存放每一层的节点
        let curLevel = [];
        while (length--) {
            let node = queue.shift();
            curLevel.push(node.val);
            for (const item of node.children) {
                item && queue.push(item);
            }
        }
        res.push(curLevel)
    }
    return res;
};

console.log('levelOrder', levelOrder(a))
