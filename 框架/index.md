### 1. React为什么要重写架构？
- React核心理念：快速响应
- 制约因素：
    - cpu瓶颈
       - js与GUI互斥
       - js大量任务霸占线程导致丢帧
       - 利用`时间分片`，对react向调用栈推任务进行约束
    - i/o瓶颈
      - Suspence / useDeferredValue
- 两个制约的解决方案，共同把矛头指向了`异步可中断更新`

### 2. 旧架构为啥不行
- 旧架构
  - Reconciler
    - jsx - bable - React.createElement - VDom
    - VDom vs 上次VDom
    - 找出需要更新的VDom
    - 通知Rederer更新到真实dom上
  - Renderer
    - ReactDom、ReactNative、ReactArt、ReactTest
- mount的组件调用mountComponet、update的组件调用updateComponent，
- 二者都会递归更新子组件
- Reconciler和Renderer以组件为单位，来回多次调用
- 无法中断，更无法恢复中断，也无法插入更高优先级的任务

## 3. 新架构咋就可以了呢
## 4. 为啥不用requestIdelCallback
- 兼容性
- 切换tab后，调用频率有所下降

## 5. scheduler原理
[source code](https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1682)

当 workingProgress（更新任务） 存在，并且浏览器不忙（`!shouldYield()`），就开始工作。

[shouldYield](https://github.com/facebook/react/blob/master/packages/scheduler/src/forks/SchedulerDOM.js#L448) 用来判断浏览器忙不忙
true:忙
false:不忙

如果超时


是否支持 navigator.scheduling.isInputPending

onmessage时设置deadline

shouldyield时判断是否超时
