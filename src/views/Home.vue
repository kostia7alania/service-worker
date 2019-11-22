<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /sr 

export default {
  name: 'home',
  components: {
    HelloWorld: () => import(/* webpackChunkName: "helloWorld" */ '@/components/HelloWorld.vue')
  }
}
</script>
