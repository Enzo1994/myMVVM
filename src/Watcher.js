import {Dep} from './Dep'

export function Watcher(vm,exp,fn){
    this.vm = vm;
    this.fn = fn;
    this.exp = exp;
    Dep.target = this;

    let val = vm;
    let arr = exp.split('.')
    arr.forEach(key=>{
        val = val[key]
    })
    Dep.target = null;
}
Watcher.prototype.update = function(){
    let val = this.vm;
    let arr = this.exp.split('.')
    arr.forEach(key=>{
        val = val[key]
    })
    this.fn(val)
}