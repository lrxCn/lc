let isMount = true;
let workInProgressHook = null;


const fiber = {
    memorizedState:null,
    stateNode:App
}

function shedule(){
    const app = fiber.stateNode();
    workInProgressHook = fiber.memorizedState;
    isMount = false;
    return app;
}

function useSetate(initialVal){

    let hook;
    if(isMount){
        hook = {
            memorizedState:initialVal,
            queue:{
                pending:null
            }
        }
        if(fiber.memorizedState){
            workInProgressHook.next = hook;
        }else{
            fiber.memorizedState = hook;
        }
        workInProgressHook = hook;
    }else{
        hook = workInProgressHook;
        workInProgressHook = workInProgressHook.next;
    }

    let baseState = hook.memorizedState;
    if(hook.queue.pending){
        let firstAction = hook.queue.pending;
        do{
            baseState = firstAction.action(baseState);
            firstAction = firstAction.next;
        }while(firstAction !== hook.queue.pending.next);
        hook.queue.pending = null;
    }
    hook.memorizedState = baseState;

    return [baseState,dispatchAction.bind(null,hook.queue)];
}

function dispatchAction(queue,action){
    const update = {
        action,
        next:null
    };
    if(queue.pending){
        update.next = queue.pending.next;
        queue.pending.next = update;
    }else{
        update.next = update;
    }

    queue.pending = update;

    shedule();

}


function App(){
    const [a,setA] = useSetate(0);
    const [b,setB] = useSetate(1);

    console.log(`a:${a}`)

    return ({
        onClick(){
            setA(num=>num+1);
            setA(num=>num+2);
        }
    })
}

window.app =  shedule();