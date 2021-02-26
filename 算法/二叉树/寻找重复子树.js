const {TreeNode} = require('./util');
// 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

// 两棵树重复是指它们具有相同的结构以及相同的结点值。

// 示例 1：

//         1
//        / \
//       2   3
//      /   / \
//     4   2   4
//        /
//       4
// 下面是两个重复的子树：

//       2
//      /
//     4
// 和

//     4
// 因此，你需要以列表的形式返回上述重复子树的根结点。



// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-duplicate-subtrees
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const gen = (...rest) => new TreeNode(...rest);

const root = gen(
    1,
    gen(
        2,
        gen(4)
    ),
    gen(
        3,
        gen(
            2,
            gen(4)
        ),
        gen(4)
    ),
);

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const cache = {};
var findDuplicateSubtrees = function(root) {
    if(!root){
        return null
    }
    const hash = root.getHash();
    if(cache[hash]){
        cache[hash].num++;
    }else{
        cache[hash]= {
            num:1,
            val:root
        };

    }
    findDuplicateSubtrees(root.left);
    findDuplicateSubtrees(root.right);
};

findDuplicateSubtrees(root)
const res =[];
Object.keys(cache).forEach(key=>{
    if(cache[key].num > 1){
        res.push(cache[key].val.toString())
    }
})
console.log(res)