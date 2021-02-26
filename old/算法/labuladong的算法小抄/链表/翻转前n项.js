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

let end;
const reverN = (head, n) => {

    if(n===1){
        end = head.next;
        return head;
    }

    const last = reverN(head.next, n-1)
    head.next.next = head;
    head.next = end;
    return last;
}


console.log(reverN(head,2).toString())

