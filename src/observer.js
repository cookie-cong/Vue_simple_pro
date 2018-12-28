//封装$on $emit $off

let EventList={

}
//$on 事件绑定  (事件名称，回调函数)
//首先要判断事件名称是否存在，如果不存在，给当前一个空数组，然后再push进去
//存在，就把回调函数push进去
const $on=(EventName,callback)=>{
    if(!EventList[EventName]){
        EventList[EventName]=[];
    }
    EventList[EventName].push(callback)
}

//$emit 事件触发 (事件名称，params)
//首先判断事件名称是否存在，不存在直接return
//如果存在，获取当前事件上相应的函数
//如果传递的值存在，将这个值传到函数中去

const $emit = (EventName,params)=>{
    if(!EventList[EventName])return;
    EventList[EventName].map((cb)=>{
        cb(params);
    })
}

//$off 事件解绑  (事件名称，解绑的函数)
//1、首先判断事件名称是否存在，不存在，什么都不用管，
//2、如果存在，就判断第二个参数是否传值，如果传值了，就解绑响应的函数，如果没有，就说明解绑所有的，数组清空
//让数组长度为0，更能提高性能

const $off = (EventName,callback)=>{
    if(EventList[EventName]){
        let EventListsOff = EventList[EventName];
        if(callback){
             EventList[EventName] =  EventListsOff.filter((cb)=>{
                 return cb != callback;
             })
        }else{
             EventList[EventName].length = 0;
        }
    }
 }
 export default{
     $on,
     $emit,
     $off
 }





// function fn(val){
//     console.log(1,val)
// }
// function fn1(val){
//     console.log(2,val)
// }

// $on("handle",fn)
// $on("handle",fn1)
// $off("handle",fn)
// $emit("handle",123)

