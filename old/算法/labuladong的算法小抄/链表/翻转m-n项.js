class ListNode {
    constructor(v,next){
        this.v = v;
        this.next = next;
    }

    link(next){
        this.next = next;
        return this;
    }

    linkArr(arr){
        let cur = this;
        for(let i = 0,len = arr.length; i < len ; i++){
            cur.next = new ListNode(arr[i]);
            cur = cur.next;
        }
        return this;
    }

    toString(){
        for(let cur = this ; !!cur ; cur = cur.next){
            console.log(cur.v);
        }
    }
}

const head = new ListNode(1).linkArr([2,3,4,5,6,7,8,9]);
// console.log(head.toString());

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 翻转前n项
 */
const reverN = (head,n) => {
    let end;

    const rN = (head,n) => {
        if(n===1){
            end = head.next;
            return head;
        }
        const last = reverN(head.next,n-1);
        head.next.next = head;
        head.next = end;
        return last;
    }
    return rN(head,n);
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(m===1){
        return reverN(head,n);
    }
    head.next = reverseBetween(head.next,m-1,n-1);
    return head;
};
console.log(reverseBetween(head,2,5).toString())

