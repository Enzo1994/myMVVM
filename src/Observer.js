import {Dep} from './Dep'
function Observer(data){
    const dep = new Dep()
    // 如果data是对象，则执行下面语句，
    for(let key in data){
        let val = data[key]
        observer(val)
        Object.defineProperty(data,key,{
            enumerable:true,
            get(){
                Dep.target && dep.addSub(Dep.target)             
                return val
            },  
            set(newVal){
                if(val == newVal){
                    return;
                }                
                val = newVal
                // 对新设置的值也观察上，万一新值又是一个对象呢
                observer(val)
                dep.notify()

            }
        })
    }
}
export function observer(data){
    if(typeof data !='object') return;
    return new Observer(data)
}








