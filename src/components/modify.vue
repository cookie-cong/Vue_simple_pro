<template>
  <div>姓名:
    <input type="text" v-model="name">
    <br>年龄:
    <input type="text" v-model="age">
    <br>爱好:
    <input type="text" v-model="hobby">
    <br>
    <br>
    <button @click="isokModify">确认修改</button>
    <br>
  </div>
</template>
<script>
/*
思路：1、当我点击列表中的修改的时候，上面的组件应该切换成修改的组件，展现相应的内容
2、当点击修改的时候不仅要切换组件，被修改的内容也要相应出现在input里，并且此时点击的这个对象，
要将其下标进行
保存，以便后面的修改，修改的时候要替换原来，也就是要删除原来的，增加一个新的。
*/
export default {
  data() {
    return {
      name: "",
      age: "",
      hobby: ""
    };
  },
  created() {
    this.observer.$on("modify", data => {
      console.log(data);
      this.name = data.name;
      this.age = data.age;
      this.hobby = data.hobby;
    });
  },
  methods: {
    isokModify() {
      let obj = {};
      obj.name = this.name;
      obj.age = this.age;
      obj.hobby = this.hobby;
      this.observer.$emit("ok", obj);
      this.$emit("handleToggle",true)
      this.clearInput();
    },
    clearInput() {
      this.name = "";
      this.age = "";
      this.hobby = "";
    }
  }
};
</script>
<style >
</style>