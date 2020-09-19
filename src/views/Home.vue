<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="我的模板" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {getFloordata} from "../api/home"
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created(){
    getFloordata().then(res=>{
      console.log(res);
    })
  }
};
</script>
