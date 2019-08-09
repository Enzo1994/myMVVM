export function Dep(){
    this.subs = []
}
Dep.prototype.addSub = function(sub){
    this.subs.push(sub)
}
Dep.prototype.notify = function(sub){
    this.subs.forEach(sub=>{sub.update()})
}

// let dep = new Dep();
// let watcher = new Watcher(()=>{
//     console.log(2)
// })
// dep.addSub(watcher);
// dep.addSub(watcher);
// console.log(dep.subs);

// dep.notify()
