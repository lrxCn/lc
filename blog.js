const str = `
|[useUndo](https://github.com/ChinaLiuRixing/react-hooks-lib/blob/master/src/hooks/useUndo.js)|撤销、反撤销||
|[useCookie](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useCookie.js)|cookie||
|[useCopyClipboard](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useCopyClipboard.js)|复制到剪切板||
|[useDarkMode](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useDarkMode.js)|夜间模式||
|[useDimensions](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useDimensions.js)|尺寸||
|[useSize](https://ahooks.js.org/zh-CN/hooks/dom/use-size)|尺寸||
|[useEventListener](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useEventListener.js)|事件监听||
|[useFullScreen](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useFullScreen.js)|全屏||
|[useGeolocation](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useGeolocation.js)|地理位置|[参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/geolocation)|
|[useIsClient](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useIsClient.js)|检查javascript是否从web客户端加载||
|[useKeyPress](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useKeyPress.js)|键盘、按键||
|[useKeyPress](https://ahooks.js.org/zh-CN/hooks/dom/use-key-press)|键盘、按键||
|[useLocalStorage](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useLocalStorage.js)|localstorage||
|[useLockBodyScroll](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useLockBodyScroll.js)|body滚动||
|[useMultiKeyPress](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useMultiKeyPress.js)|组合按键||
|[useNotification(不可用，但是notification值得看看)](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useNotification.js)|通知|[参考](https://developer.mozilla.org/zh-CN/docs/Web/API/notification)|
|[useOnClickOutside](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useOnClickOutside.js)|点击外部||
|[useSpeechRecognition](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useSpeechRecognition.js)|语音识别|[参考](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)|
|[useWorker](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useWorker.js)|service worker||
|[useWindowSize](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useWindowSize.js)|宽高||
|[useWindowScroll](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useWindowScroll.js)|滚动||
|[useWhyDidYouUpdate](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useWhyDidYouUpdate.js)|组件更新的原因||
|[useSpeechSynthesis](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useSpeechSynthesis.js)|语音合成|[参考](https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis)|
|[useSpeechRecognition](https://github.com/ChinaLiuRixing/react-recipes/blob/master/src/useSpeechRecognition.js)|语音|[参考](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)|
|[useBattery](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useBattery.ts)|电池||
|[useHash](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useHash.ts)|路由||
|[useIdle](https://github.com/ChinaLiuRixing/react-use/blob/master/docs/useIdle.md)|检测60s用户无操作||
|[useSearchParam](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useSearchParam.ts)|url参数|[参考](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)|
|[useLongPress](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useLongPress.ts)|键盘、按键、长按||
|[useMediaDecices](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useMediaDevices.ts)|设备信息|[参考](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices)|
|[useMotion](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useMotion.ts)|设备当时的加速度（移动端）|[参考](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicemotion_event)|
|[useMouse](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useMouse.ts) [hover](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useMouseHovered.ts) [滑轮](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useMouseWheel.ts)| 鼠标||
|[useNetwork](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useNetwork.ts)|网络状态||
|[useOrientation](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useOrientation.ts)|屏幕方向||
|[usePageLeave](https://github.com/ChinaLiuRixing/react-use/blob/master/src/usePageLeave.ts)|鼠标离开页面||
|[useStartTyping](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useStartTyping.ts)|用户开始输入||
|[useMeasure](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useMeasure.ts)|尺寸||
|[useScrollbarWidth](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useScrollbarWidth.ts)|滚动条宽度||
|[useAudio](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useAudio.ts)|audio||
|[useDrop](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useDrop.ts)|	拖动、放置||
|[useVibrate](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useVibrate.ts)|震动|[参考](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)|
|[useSlider](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useSlider.ts)|轮播||
|[useVideo](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useVideo.ts)|video||
|[useUpdate](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useUpdate.ts)|触发组件render||
|[useTween](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useTween.ts)|补间动画|[参考](https://www.npmjs.com/package/ts-easing)
|[useRafLoop](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useRafLoop.ts)|管理raf||
|[useSessionStorage](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useSessionStorage.ts)|sessionstorage||
|[useFavicon](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useFavicon.ts)|favicon||
|[useLogger](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useLogger.ts)|打印生命周期||
|[useRendersCount](https://github.com/ChinaLiuRixing/react-use/blob/master/src/useRendersCount.ts)|监听render次数、性能优化||
|[useDoubleClick](https://github.com/zattoo/use-double-click)|双击||
|[useDeepComparewon](https://github.com/sandiiarov/use-deep-compare)|深比较|https://www.npmjs.com/package/dequal|
|[react-communication](https://github.com/AvraamMavridis/react-window-communication-hook)|页面通信||
|[lazyloadImg](https://github.com/lordgiotto/react-metatags-hook)|图片懒加载||
|[infiniteLoader](https://github.com/CurationCorp/react-use-infinite-loader)|无线滚动||
|[useIndexdb](https://github.com/kigiri/react-use-idb)|indexdb|https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API|
|[metatag](https://github.com/lordgiotto/react-metatags-hook)|meta||
|[immerhooks](https://github.com/sin/react-immer-hooks)|不可变数据结构||
|[hooksworker](https://github.com/dai-shi/react-hooks-worker)|servers worker||
|[imgSize](https://github.com/use-hooks/react-hooks-image-size)|img url to size||
|[statusHooks](https://github.com/yeskunall/react-dom-status-hook)|性能监控、性能优化||
|[clickOutside](https://github.com/wellyshen/react-cool-onclickoutside)|点击到外部||
|[webAnimation](https://github.com/wellyshen/use-web-animations)|动画||
`

console.log()
const arr = str.replaceAll(`

`).split('[won]').map(item=>item.split('\t'));

const info = arr.map(([name='',github='',desc='',reference=''])=>{
    return `| [${name}](${github}) |${desc}|${reference}|`
})

console.log(info);

// | [use-immer](https://github.com/immerjs/use-immer)  | 替代usestate、性能优化|[《不可变数据结构》](https://juejin.cn/post/6844903859618332680) [immer](https://www.npmjs.com/package/immer) |