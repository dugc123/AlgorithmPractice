/*
 *  给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

    示例 1:          中左右                    左中右
        输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
        输出: [3,9,20,null,null,15,7]
    
    示例 2:
        输入: preorder = [-1], inorder = [-1]
        输出: [-1]
 */
        function TreeNode(val, left, right) {
            this.val = (val === undefined ? 0 : val)
            this.left = (left === undefined ? null : left)
            this.right = (right === undefined ? null : right)
        }
        /**
         * @param {number[]} preorder
         * @param {number[]} inorder
         * @return {TreeNode}
         */
        var buildTree = function (preorder, inorder) {
            if (!preorder.length) {
                return null;
            }
            let rootVal = preorder.shift(); //根元素
            let inx = inorder.indexOf(rootVal);
            let root = new TreeNode(rootVal);
            root.left = buildTree(preorder.slice(0, inx), inorder.slice(0, inx));
            root.right = buildTree(preorder.slice(inx), inorder.slice(inx + 1));
        
            return root;
        };
        
        let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
        console.log('buildTree',buildTree(preorder, inorder))