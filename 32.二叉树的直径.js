// 定义二叉树节点构造函数
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// 计算二叉树直径的函数
function diameterOfBinaryTree(root) {
    let diameter = 0;

    function depth(node) {
        if (node === null) return 0; // 空节点的高度为0

        // 计算左右子树的高度
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        // 更新直径：当前节点的直径是左子树高度加右子树高度
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // 返回该节点的高度（比它的较高子树多1）
        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root); // 开始从根节点计算
    return diameter;
}

// 使用示例：
// 构建如下二叉树:
//         1
//        / \
//       2   3
//      / \    
//     4   5   
const tree = new TreeNode(1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
);

console.log(diameterOfBinaryTree(tree)); // 输出: 3