const CreateStore = (combineReducer, initialState, rewrireCreateStoreFunction) => {
    if (rewrireCreateStoreFunction) {
        return rewrireCreateStoreFunction(CreateStore)(combineReducer, initialState)
    }
    let state = initialState;

    let listeners = [];
    const getState = () => {
        return state;
    }
    const dispatch = (action) => {
        state = combineReducer(state, action)
        listeners.forEach(cb => cb())
    }

    const subcribe = (cb) => {
        listeners.push(cb);
        return function unsubcribe(ucb) {
            listeners.splice(listeners.indexOf(ucb), 1);
        }
    }

    dispatch(Symbol(''))

    return ({
        getState,
        dispatch,
        subcribe
    })
}

// 把两个switchCase组装，分别管理各自的区域
const CombineReducer = (reducers = {}) => (state, action) => (
    Object.keys(reducers).reduce((total, cur) => ({
        ...total,
        [cur]: reducers[cur](state[cur], action)
    }), {})
)



const applyMiddleWare = (...midlleWares) => {
    return function rewriteCreateStore(oldCreateStore) {
        return function createStore(combineReducer, initialState) {
            const store = oldCreateStore(combineReducer, initialState);
            let oldDispatch = store.dispatch;
            midlleWares.reverse().forEach(mid => {
                oldDispatch = mid(store)(oldDispatch)
            })
            store.dispatch = oldDispatch;
            return store;
        }
    }
}

// 业务代码
function counterReducer(state = { count: 0 }, action) {
    const match = {
        'INCREASE': {
            ...state,
            count: state.count + 1
        },
        'DECREASE': {
            ...state,
            count: state.count - 1
        },
    };
    return match[action.type] || state
}

function infoReducer(state = { name: '', description: '' }, action) {
    const match = {
        'SET_NAME': {
            ...state,
            name: action.name
        },
        'SET_DESCRIPTION': {
            ...state,
            description: action.description
        },
    };
    return match[action.type] || state
}
const logMiddleWare = (store) => dispatch => (action) => {
    console.log('before dispatch', store.getState());
    dispatch(action);
    console.log('after dispatch', store.getState());
}

const actionMiddleWare = (state) => dispatch => (action) => {
    console.log('action', action);
    dispatch(action);
}

let store = CreateStore(
    CombineReducer({
        counter: counterReducer,
        info: infoReducer
    }),
    {}
    // ,
    // applyMiddleWare(logMiddleWare,actionMiddleWare)
)

// const log = ()=>console.log(store.getState());
// const unSbucribe = store.subcribe(log);

// unSbucribe(log);
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'DECREASE' });
store.dispatch({ type: 'SET_NAME', name: '哈尔滨' });
store.dispatch({ type: 'SET_DESCRIPTION', description: "省会" });


// 1.03.45––