<details>
<summary>@import和link的区别</summary>
1. @import只能引入样式表，link还可以定义icon、rel连接属性、RSS
2. link引入的css被同时加载，@import要等页面加载完毕再加载。
3. 兼容性区别
</details>

<details>
<summary>浏览器和内核关系表</summary>

|  浏览器   | 内核  |
|  ----  | ----  |
| IE  | Trident |v
| Chrome  | Webkit、Blink |
| Opera  | Presto、Blink |
| FireFox  | Gecko |
| Safari  | Webkit |

</details>

<details>
<summary>浏览器渲染原理</summary>

1. DOM树
2. CSSOM规则树
3. RenderTree
4. 回流（根据渲染树布局，找到各个元素的大小和位置，也叫自动重排）
5. 绘制（调用渲染对象的paint方法）
6. 边解析边绘制
7. 由于浏览器使用流式布局，对 Render Tree 的计算通常只需要遍历一次就可以完成，但 table 及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么要避免使用 table 布局的原因之一；

</details>


<details>
<summary>form的自动完成</summary>

autoComplete

</details>


<details>
<summary>跨tab页通信</summary>

1. 服务端中介+websocket
2. localStorage更新触发storage事件
3. 如果能获得tab的引用，可以postMessage

</details>


<details>
<summary>前端性能优化</summary>

1. 埋点、监控，web-vitas,performanceAPI（定指标，找出指标和业务数据关系：正相关、负相关）
2. AB实验、版本控制机制
3. 性能优化方案
   1. DNS缓存
   2. 少发请求
      1. 合并文件
      2. 雪碧图
      3. 把h5的不变的资源文件，放app里
   3. 小发请求
      1. 静态文件不要同域名，减少cookie
   4. 快速响应
      1. cdn预热
   5. 缓存
      1. pwa
      2. 强缓存、协商缓存
   6. 小响应
      1. 200ms一返回
      2. gzip压缩
   7. 执行
      1. sw执行cpu密集
      2. wasm字节码速度

</details>


<details>
<summary>webp</summary>

google格式，浏览器可能不支持

</details>


<details>
<summary>bfc</summary>

创建 `BFC` 的方式有：

1. 根元素（<html>）
   1. flow-root
2. 浮动元素（元素的 float 不是 none）
3. 绝对定位元素（元素的 position 为 absolute 或 fixed）
4. 行内块元素（元素的 display 为 inline-block）
5. 表格单元格（元素的 display 为 table-cell，HTML表格单元格默认为该值）
6. 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
7. 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
8. overflow 计算值(Computed)不为 visible 的块元素
9.  display 值为 flow-root 的元素
10. contain 值为 layout、content 或 paint 的元素
11. 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
12. 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
13. 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
14. column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

`BFC` 主要的作用是：

1. 清除浮动
2. 防止同一 `BFC` 容器中的相邻元素间的外边距重叠问题

</details>

<details>
<summary>div水平垂直居中</summary>

1. grid,place-items:center;
2. positon:relativce; position:absolute, top:50%, left:50%, transform:translate(-50%,-50%)
3. display:flex;align-items:center;justify-concent:center;

</details>


<details>
<summary>回流和重绘</summary>

`重绘`：由于节点的集合属性发生改变或者由于样式改变而不会影响布局的，成为重绘，例如 outline、visibility、color、background-color 等，重绘的代价是高昂的，因此浏览器必须验证 DOM 树上其他节点元素的可见性。

`回流`：回流是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致其素有子元素以及 DOM 中紧随其后的节点、祖先节点元素的随后的回流。大部分的回流将导致页面的重新渲染。

回流必定会发生重绘，重绘不一定会引发回流。

`浏览器优化`
现代浏览器大多是通过队列机制来批量更新布局，浏览器会把修改操作放在队列中，至少一个浏览器刷新（即16.6ms）才会清空队列，但当你获取布局信息的时候，队列中可能会有影响这些属性或方法返回值的操作，即使没有，浏览器也会强制清空队列，触发回流和重绘来确保返回正确的值。

例如 offsetTop、clientTop、scrollTop、getComputedStyle()、width、height、getBoundingClientRect()，应避免频繁使用这些属性，他们都会强制渲染刷新队列。

CSS
1. 使用 transform 代替 top；
2. 使用 visibility 替换 display: none，前者引起重绘，后者引发回流；
3. 避免使用 table 布局；
4. 尽可能在 DOM 树的最末端改变 class；
5. 避免设置多层内联样式，CSS 选择符从右往左匹配查找，避免节点层级过多；
6. 将动画效果应用到 position 属性为 absolute 或 fixed 的元素上，避免影响其他元素的布局；
避免使用 CSS 表达式，可能会引发回流；
CSS 硬件加速；
Javascript
1. 避免频繁操作样式，修改 class 最好；
2. 避免频繁操作 DOM，合并多次修改为一次；
3. 避免频繁读取会引发回流/重绘的属性，将结果缓存；
4. 对具有复杂动画的元素使用绝对定位，使它脱离文档流；

</details>

<details>
<summary>opacity: 0、visibility: hidden、display: none</summary>
|  item              |占据空间    | 可以点击    | 回流、重绘 | 子元素影响  |
|   ----             |----       | ----      |----       |  ----    |
| display:none       | ×         | ×         | 回流      | ×         |
| visibility:hidden  | √         | ×         | 重绘      | √         |
| opacity:0          | √         | √         | 重绘      | ×         |
</details>

<details>
<summary>css盒模型</summary>
IE盒模型：border-box
w3c标准盒模型：content-box
</details>

<details>
<summary>移动端视口设置</summary>
width:device-width
initial-scale:1.0
maxium-scale:1.0
minium-scale:1.0
user-scalable:no
</details>

<details>
<summary>伪类伪元素</summary>
伪元素 ::after ::before
伪类 :active :hover :focus :fullscreen
</details>

<details>
<summary>css可以继承的属性</summary>
字体系列属性
font-family
font-size
font-weight
font-style
文本系列属性
text-indent
text-align
line-hight
word-spacing
letter-spacing
color
其他
cursor
visibility
</details>

<details>
<summary>max-width、min-width、width冲突优先级</summary>
min-width > max-width > width
</details>

<details>
<summary>css三角形原理</summary>

```
.tri {
      width: 100px;
      height: 100px;
      border: 50px solid transparent;
      border-bottom-color: red;
      border-top-color: yellow;
      border-left-color: blue;
      border-right-color: coral;
}
```

</details>


<details>
<summary>为什么vue把Object.defineProperty换成了Proxy</summary>

Object.defineProperty 无法低耗费的监听到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
Object.defineProperty 递归监听
Proxy 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。

</details>

<details>
<summary>节流防抖</summary>

```
const debounce = (fn, timeout = 500, timer) => () => {
      clearTimeout(timer);
      timer = setTimeout(fn, timeout);
}

const throttle = (fn, timeout = 500, isRunning) => () => {
      if (!isRunning) {
         isRunning = true;
         fn();
         setTimeout(() => isRunning = false, timeout);
      }
}
```
</details>


<details>
<summary>手写Object.assign</summary>

```
;(function(){
   if(Object.assign){
      return;
   }

   const isValid = v => new Set([null,void 0]).has(v);

   Object.assign = (source,...rest) => {
      if(!isValid(source)){
         throw new Error('Can not convert null or undefined to object')
      }
      return rest.reduce((total,cur)=>{
         if(isValid(cur)){
            for(let key of cur){
               if(Object.prototype.hasOwnProperty.call(cur,key)){
                  total[key] = cur[key];
               }
            }
         }
         return total;
      },Object(to));
   }
})()
```
</details>

<details>
<summary>手写Object.assign</summary>

```
;(function(){
   if(Object.assign){
      return;
   }

   const isValid = v => new Set([null,void 0]).has(v);

   Object.assign = (source,...rest) => {
      if(!isValid(source)){
         throw new Error('Can not convert null or undefined to object')
      }
      return rest.reduce((total,cur)=>{
         if(isValid(cur)){
            for(let key of cur){
               if(Object.prototype.hasOwnProperty.call(cur,key)){
                  total[key] = cur[key];
               }
            }
         }
         return total;
      },Object(to));
   }
})()
```
</details>
