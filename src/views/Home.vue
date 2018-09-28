<template>
  <div class="home">
    <div class="logoWrap" >
      <img src="../assets/logo.png">
    </div>
    <HelloWorld msg="Vue Cli 3"/>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped lang="scss">
  .logoWrap{
    text-align: center;
    margin-top: 50px;
  }

</style>
