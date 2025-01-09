function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function flatten(root) {
    if (!root) return;

    let stack = [root];
    
    while (stack.length > 0) {
        let curr = stack.pop();

        if (curr.right !== null) {
            stack.push(curr.right);
        }

        if (curr.left !== null) {
            stack.push(curr.left);
        }

        // If stack is not empty, set current node's right to the next item in the stack.
        curr.left = null;
        if (stack.length > 0) {
            curr.right = stack[stack.length - 1];
        }
    }
}

// 创建一个二叉树
let tree = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3),
        new TreeNode(4)
    ),
    new TreeNode(5,
        null,
        new TreeNode(6)
    )
);

// 将二叉树展开为链表
flatten(tree);