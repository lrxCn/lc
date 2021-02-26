
// 根据一棵树的前序遍历与中序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7

const {TreeNode} = require('./util');

const main = (preorder,inorder) => {
    if(preorder.length === 0 || inorder.length === 0){
        return null;
    }
    const [prehead] = preorder;
    if(preorder.length === 1){
        return new TreeNode(prehead)
    }
    const preheadInIndex = inorder.indexOf(prehead);

    // 左子树中序遍历
    const leftinOrder = inorder.slice(0,preheadInIndex);
    // 右子树中序遍历
    const rightinOrder = inorder.slice(preheadInIndex+1);

    // 右子树前序遍历
    let tempIndex = 0;
    for(let i = 0 ; i < rightinOrder.length;i++){
        tempIndex = Math.max(preorder.indexOf(rightinOrder[i]),tempIndex)
    }
    rightPreOrder = preorder.slice(tempIndex);

    // 左子树前序遍历

    return new TreeNode(
        prehead,
        main(
            preorder.slice(1,tempIndex),
            leftinOrder),
        main(rightPreOrder,rightinOrder)
    )

}

const res = main([3,1,2,4],[1,2,3,4]);
console.log(res.toString())