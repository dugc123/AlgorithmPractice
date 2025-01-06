
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * 中序遍历，左中右，数据从小到大排列
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    // let arr = [];
    // let fn = (node) => {
    //     if (!node) {
    //         return node;
    //     }

    //     node.left && fn(node.left);
    //     arr.push(node.val)
    //     node.right && fn(node.right);
    // }
    // fn(root);
    // let result = arr.slice(0, k);
    // return result[result.length - 1];

    let dfs = (node) =>{ 
        if (!node) {
            return -1;
        }
        const leftRes = dfs(node.left);
        if (leftRes !== -1) {// 答案在左子树中
            return leftRes;
        }

        if (--k === 0) {// 答案就是根节点
            return node.val;
        }

        return dfs(node.right); // 右子树会返回答案或者 -1
    }

    return dfs(root);
};

let k = 3;
// root = [5,3,6,2,4,null,null,1]
let root = new TreeNode(5,new TreeNode(3,new TreeNode(2,new TreeNode(1),null),new TreeNode(4)),new TreeNode(6))
console.log('kthSmallest',kthSmallest(root,k))