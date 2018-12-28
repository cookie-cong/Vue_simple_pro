<template>
    <div id="List">
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.observer.$on("todolist",(val)=>{
        //    console.log(val)
        console.log(this)
            this.list.push(val);
        })
    }
}
</script>
<style >
    
</style>