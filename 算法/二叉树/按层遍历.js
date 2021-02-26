const { TreeNode, root } = require('./util');


const main = (root) => {
    while(root.left){
        root = root.left;
    }


}



console.log(main(root));
