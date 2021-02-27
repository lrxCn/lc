type person = {
    name:string;
    age:number;
}

type student = {
    name:string;
    age:number;
    id:number;
}

type stuperson = person & student;

const p:stuperson = {
    name:'1',
    age:1,
    id:1
}
// =================
interface Obj{
    name:string;
    age:string
}

const getValue = (o:Obj,k:keyof Obj) => {
    return o[k];
}

getValue({name:"1",age:'1'},'name')
// getValue({name:"1",age:'1'},'name1')


// =================
type v = 'name' | 'age';

type per = {
    [key in v]:string;
}

const obj:per = {
    name:'1',
    // name:1,
    age:'1'
}

