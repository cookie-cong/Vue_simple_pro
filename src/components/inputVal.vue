<template>
    <div id="InputVal" >
        <input type="text" v-model="inputVal"/>
        <button @click="handleAdd">添加</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            inputVal:""
        }
    },
    methods:{
        handleAdd(){
            // alert(1)
            console.log(this.inputVal)
            this.observer.$emit("todolist",this.inputVal);
            this.inputVal="";
        }
    }
}
</script>
<style >
    
</style>