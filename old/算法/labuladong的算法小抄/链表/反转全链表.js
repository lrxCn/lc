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


const reverse = (head) =>{
    if(!head.next){
        return head;
    }
    const last = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}

console.log(reverse(head).toString())

