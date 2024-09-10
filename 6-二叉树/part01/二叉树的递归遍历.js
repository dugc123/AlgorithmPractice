class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

var a = new TreeNode("a");
var b = new TreeNode("b");
var c = new TreeNode("c");
var d = new TreeNode("d");
var e = new TreeNode("e");
var f = new TreeNode("f");
var g = new TreeNode("g");

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

/**
 * 前序遍历
 */
var preorderTraversal1 = function(root) {
    return root ? [root.val, ...preorderTraversal1(root.left), ...preorderTraversal1(root.right)] : [];
}
// console.log('preorderTraversal1',preorderTraversal1(a))

var preorderTraversal = function(root) {
    let depts = [];
    var dfs = function(node) {
        if (!node) {
            return;
        }
        depts.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return depts;
}

// console.log('preorderTraversal',preorderTraversal(a))

//前序遍历(迭代法)
var preorderTraversa3 = function(root) {
    if (!root) {
        return [];
    }
    let stack = [root];
    let res = [];
    while(stack.length) {
        let cur = stack.pop();
        res.push(cur.val);
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return res;
}

// console.log('preorderTraversa3',preorderTraversa3(a));

//-----------------------------------

//中序遍历
var inorderTraversal1 = function(root) {
    return root ? [...inorderTraversal1(root.left), root.val, ...inorderTraversal1(root.right)] : []
}

// console.log('inorderTraversal1',inorderTraversal1(a));

var inorderTraversal2 = function(root) {
    let depts = [];
    var dfs = function(node) {
        if (!node) {
            return;
        }
        dfs(node.left);
        depts.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return depts;
}

console.log('inorderTraversal2',inorderTraversal2(a))

//中序遍历(迭代法)
var inorderTraversal3 = function(root) {
    let stack = [], res = [], cur = root;
    while(stack.length || cur) {
        if (cur) {
            stack.push(cur);
             // 左
            cur = cur.left;
        } else {
            //弹出
            cur = stack.pop();
            res.push(cur.val);
            //右
            cur = cur.right;
        }
    }
    return res;
}
console.log('inorderTraversal3',inorderTraversal3(a));

//-----------------------------------


//后序遍历
var postorderTraversal1 = function(root) {
    return root ? [...postorderTraversal1(root.left), ...postorderTraversal1(root.right), root.val] : [];
}

// console.log('postorderTraversal1',postorderTraversal1(a))

var postorderTraversal2 = function(root) {
    let depts = [];
    var dfs = function(node) {
        if (!node) {
            return;
        }
        dfs(node.left);
        dfs(node.right);
        depts.push(node.val);
    }
    dfs(root);
    return depts;
}

// console.log('postorderTraversal2',postorderTraversal2(a))

//
/**
 * 后序遍历(迭代法) 
 * 前序遍历 中左右
 * 后序遍历 左右中
 * 将前序遍历入栈顺序调整，然后翻转数组，即可得到后序遍历
 */
var postorderTraversal3 = function(root) {
    if (!root) {
        return [];
    }

    let stack = [root], res = [];
    while(stack.length) {
        let cur = stack.pop();
        res.push(cur.val);
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
    }
    return res.reverse();
}

// console.log('postorderTraversal3',postorderTraversal3(a))
