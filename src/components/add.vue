<template>
    <div>
        姓名: <input type="text" v-model="name"/><br/>
        年龄: <input type="text" v-model="age"/><br/>
        爱好: <input type="text" v-model="hobby"><br/><br/>
        <button @click="handleSubmit">提交</button><br/>
    </div>
</template>
<script>
export default {
    data(){
        return{
                name:"",
                age:"",
                hobby:""
        }
    },
    methods:{
        handleSubmit(){
            let obj = {};
            obj.name=this.name;
            obj.age = this.age;
            obj.hobby = this.hobby;
            this.observer.$emit("tijiao",obj)
            this.clearInput();
        },
        clearInput(){
            this.name="";
            this.age="";
            this.hobby="";
        }
    }
}
</script>
<style >
    
</style>