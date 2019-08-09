import {Compiler} from './Compiler'
import {observer} from './Observer'
export const MVVM=function (options) {
    this.$options = options;
    this._data =this.$options.data
    observer(this._data)
    this.dataProxy()
    new Compiler(this.$options.el,this)
}

 
MVVM.prototype.dataProxy = function(){
        for(let key in this._data){
        Object.defineProperty(this,key,{
            enumerable: true,
            get(){
                return  this._data[key]
            },
            set(newVal){                
                if(newVal == this._data[key]) return;
                this._data[key] = newVal;
            }
        })
    }
}