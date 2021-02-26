const jsonp = ({ url = '', params = [], callbackName = Math.random().toString() }) => {

    const generate = ({url,params,callbackName}) =>{
        let dataStr = '';
        for(let key in params){
            dataStr+=`${key}=${params[key]}&`
        }
        return `${url}?${dataStr}callbackName=${callbackName}`
    }


    return Promise((resolve)=>{

        const el = document.createElement('script');
        el.src = generate({url,params,callbackName});

        document.body.appendChild(el);

        window[callbackName] = data =>{
            resolve(data);

            document.body.removeChild(el);
        }
    })
}