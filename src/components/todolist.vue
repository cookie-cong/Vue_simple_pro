<template>
    <div class="todolist">
        <ul>
            <li v-for="(item,index) in todolist" :key="index"
                @click="handleClick(index)"
                :class="activeIndex==index?'active':''"
            >
                <p>{{item.name}}</p>
                <p>{{item.age}}</p>
                <p>{{item.hobby}}</p>
                <button @click="handleModify(index)">修改</button>
                <button @click="handleDel(index,$event)">删除</button>
                </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            todolist:[],
            activeIndex:0,
            modifyIndex:0,
            activeItem:{}
        }
    },
    created(){
        this.observer.$on("tijiao",(val)=>{
            this.todolist.push(val)
        })
        this.observer.$on("ok",(value)=>{
            console.log(value);
            this.todolist.splice(this.modifyIndex,1,value)
            /* splice里面可以传3个参数，就是从当前这个开始删除一个，然后再这个位置上再加一个*/
        })
    },
    methods:{
       handleClick(index){
           this.activeIndex=index;
           //记录选中的元素
           this.activeItem = this.todolist[index];
       },
       handleDel(index,e){
           e.stopPropagation();
           if(!confirm("确定要删除吗"))return;
           this.todolist.splice(index,1)
           console.log(this.activeIndex);
           //查看我选中的那个下标
           let idx = this.todolist.indexOf(this.activeItem);
           //修改选中的下标
           this.activeIndex = idx;
       },
       handleModify(index){
        //    alert(1)
           
          let infor = this.todolist[index]
          //记录需要修改的下标
          this.modifyIndex=index;
          //切换到需要修改的模块
          this.observer.$emit("modify",infor)
          this.$emit("handleToggle",false)
       }
    }
}
</script>
<style scoped>
.todolist li{
    list-style:none;
    margin-bottom:10px;
}  
.active{
    background: tomato;
    width:200px;
    height:150px;
    
}
</style>

