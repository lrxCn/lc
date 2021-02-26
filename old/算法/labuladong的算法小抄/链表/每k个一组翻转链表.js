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

const head = new ListNode(1).linkArr([2,3,4,5]);
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
const reverse = (head) => {
    let cur = head;
    let next = head.next;
    let prev = null;
    while(cur){
        next = cur.next;
        [
            cur.next,
            cur,
            prev,
        ] = [
            prev,
            next,
            cur,
        ]

        // cur.next = prev;
        // prev = cur;
        // cur = next;

    }
    return prev;
}
console.log(reverse(head).toString())