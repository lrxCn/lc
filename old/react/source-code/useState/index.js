let isMount = true;
// 当前正在执行的hooks
let workInProgrssHooks = null;

const fiber = {
    stateNode: App,
    // 负责保存hooks数据，保存了一条链表的第一个hook
    memorizedState: null
}

function schedule() {
    // 初始化
    workInProgrssHooks = fiber.memorizedState;
    const app = fiber.stateNode();
    isMount = false;
    return app;
}

function useState(initialState) {
    // 如果有多个useState我是哪个hook
    let hook;

    // 首次渲染
    if (isMount) {
        hook = {
            memorizedState: initialState,
            next: null,
            // 假设一个onClick里写了多个setState，就会产生多个效应
            //
            queue: {
                pending: null
            }
        }
        // 如果首次渲染，并且不是第一个useState
        if (fiber.memorizedState) {
            // 把当前的useState跟上一个useState连接起来
            workInProgrssHooks.next = hook;
            // 如果首次渲染，并且是第一个useState
        } else {
            fiber.memorizedState = hook;
        }
        workInProgrssHooks = hook;
        // 更新
    } else {
        // 找到当前正在运行的hook
        hook = workInProgrssHooks;
        // 下次进入这个useState就能找到自己了
        workInProgrssHooks = workInProgrssHooks.next;
    }

    // 上次的状态，或者初始状态
    let baseState = hook.memorizedState;
    // 根据上次状态，和action生产新的状态
    if (hook.queue.pending) {
        let firstUpdate = hook.queue.pending.next;
        do {
            const action = firstUpdate.action;
            baseState = action(baseState);
            firstUpdate = firstUpdate.next;
        } while (firstUpdate !== hook.queue.pending.next);

        hook.queue.pending = null;
    }
    hook.memorizedState = baseState;
    return [baseState,dispatchAction.bind(null,hook.queue)]
}

function dispatchAction(queue, action) {
    // 环状链表
    // 为什么是环装的？因为更新是有优先级的
    const update = {
        action,
        next:null
    }

    // 当前hook还没有要触发的更新，在一个onClick里的第一个setState
    if (queue.pending === null) {
        update.next = update;
        // 在一个onClick里的第2个及以后的setState
    } else {
        update.next = queue.pending.next;
        queue.pending.next = update;
    }

    queue.pending = update;

    // 触发更新
    schedule();
}

function App() {
    const [num, setNum] = useState(0);

    console.log(`isMount:${isMount}`);
    console.log(`num:${num}`);

    return ({
        onClick() {
            setNum(num => num + 1)
            setNum(num => num + 2)
        }
    })
}

window.app = schedule();

// app.onClick();