import {Watcher} from './Watcher'
export function Compiler(el,vm){
    vm.$el = document.querySelector(el)
    const fragment = document.createDocumentFragment()
    let child = null;
    while(child = vm.$el.firstChild){
        fragment.appendChild(child)
    }
    replace(fragment.childNodes)
    function replace(fragment){
        Array.from(fragment).forEach(node=>{
            let text = node.textContent;
            let regExp = /\{\{((?:.|\n)+?)\}\}/g
            
            if(node.nodeType == 3  && regExp.test(node.textContent)){  // 如果设置正则为全局搜索，则每次test后，每个lastIndex索引都会改变；
                regExp.lastIndex = 0;
                let match =[];
                while ((match = regExp.exec(text)) != null) {
                    new Watcher(vm,match[1],(newVal)=>{
                        node.textContent = text.replace(regExp,newVal)
                    })
                    let val = vm;
                    let arr = match[1].split('.')
                    arr.forEach(key=>{
                        val = val[key]
                    })
                    node.textContent = node.textContent.replace(match[0],val)
                }
            }
            if(node.childNodes){
                replace(node.childNodes)
            }
        })
    }
    vm.$el.appendChild(fragment)
}
