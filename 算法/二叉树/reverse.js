// 翻转一棵二叉树。

// 示例：

// 输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/invert-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = val;
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val = 0,left = null,right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

TreeNode.prototype.valueOf = function(){
    return this.val
}

const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5),
    ),
    new TreeNode(
        3,
        new TreeNode(6),
        new TreeNode(7),
    ),
)

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const reverse = (root) => {
    if(!root){
        return null;
    }
    [root.left, root.right] = [root.right, root.left];

    reverse(root.left);
    reverse(root.right);
    return root;
}

console.log(reverse(root));
console.log(root);