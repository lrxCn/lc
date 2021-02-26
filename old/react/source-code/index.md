## Build Your Own React 读后感

[address](https://pomb.us/build-your-own-react/)
[codesandbox](https://codesandbox.io/s/didact-2-k6rbj)
1. babel对jsx做了什么？
   编译前
   ```
   const element = <div>
        1
      	<div>
        	head
        </div>
        <div className='footer'>
        	foot
        </div>
        1
        <span></span>
        1
      </div>
   ```
    编译后
    ```
    "use strict";

    const element = React.createElement("div", null,
            "1",
            React.createElement("div", null,
                "head"
            ),
            React.createElement("div", {className:"footer"},
                "foot"
            ),
            "1",
            React.createElement("span", null),
            "1"
        );
    ```
2.  React.createElement做了什么？
    ```
    {
        type:'div',
        porps:{
            children:[
                {
                    type:'div',
                    porps:{
                        children:[
                            'head'
                        ],
                    }
                },
                {
                    type:'div',
                    porps:{
                        children:[
                            'foot'
                        ],
                        className:'footer'
                    }
                },
                '1',
                {
                    type:'span',
                },
                '1',
            ],
        }
    }


    ```
3. 对babel使用魔法注释可以替换React.createElement
    ```
    /** @jsx Temp.c */
    const element = <h1>1234</h1>
    ```
    结果
    ```
    "use strict";

    /** @jsx Temp.c */
    const element = Temp.c("h1", null, "1234");
    ```
4. ReactDom.render做了什么
   ```
   MyReact.render = (element,container){
       const dom = document.createElement(element.type);

       const isProperty = key => key !== 'children';

       Object.keys(element.props)
            .filter(isProperty)
            .forEach(item=>{
                dom[item] = element.props[item];
            })

        element.children.forEach(item=>{
            MyReact.render(item,dom)
        })

       contianer.appendChild(element);
   }
   ```

5. fiber是个四向链表
   父-长子
   长子-父
   兄-首弟
   小儿子-父

   选择next-unit-of-work的优先级
   长子-长弟-叔叔