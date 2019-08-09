import {MVVM} from './Constructor'

window.mvvm = new MVVM({
    el:'#app',
    data:{
        a:10,
        d:3,
        b:{c:6}
    }
})