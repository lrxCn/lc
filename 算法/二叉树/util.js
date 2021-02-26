function TreeNode(val = 0,left = null,right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

TreeNode.prototype.toString = function(level=1){
    const left = this.left && this.left.toString(level+1)
    const right = this.right && this.right.toString(level+1);

    const leftString = left ? `l-${left}`:'';
    const rightString = right ? `r-${right}`:'';
    let res = `${this.val}`;
    leftString && (res+= `
    ${'   '.repeat(level)}${leftString}`)

    rightString && (res+= `
    ${'   '.repeat(level)}${rightString}`)

    return res;
}

TreeNode.prototype.prevOrder = function(){
    if(!this){
        return null
    }

    const left = this.left ? this.left.prevOrder() : [];
    const right = this.right ? this.right.prevOrder() : [];

    return [this.val].concat(left).concat(right);
}

TreeNode.prototype.inOrder = function(){
    if(!this){
        return null
    }

    const left = this.left ? this.left.prevOrder() : [];
    const right = this.right ? this.right.prevOrder() : [];

    return left.concat(this.val).concat(right);
}

TreeNode.prototype.getHash = function(){
    return `${this.prevOrder().join(',')}||${this.inOrder().join(',')}`
}



const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(
            4,
            new TreeNode(
                7,
                new TreeNode(
                    8
                ),
                new TreeNode(
                    9
                )
            )
        ),
        // new TreeNode(5),
    ),
    new TreeNode(
        3,
        // new TreeNode(6),
        // new TreeNode(7),
    ),
)

module.exports.TreeNode = TreeNode;
module.exports.root = root;