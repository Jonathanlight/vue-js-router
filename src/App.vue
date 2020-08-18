<template>
  <div id="app" class="container-fluid d-flex flex flex-column">
    <div class="d-flex flex-row align-items-center bg-light mb-5" style="height: 50px;">
      <a class="px-5" @click="selectedComponent='Comp1'"> Component 1 </a>
      <a class="px-5" @click="selectedComponent='Comp2'"> Component 2 </a>
    </div>
    <div class="m-5">
      <component :is="selectedComponent"> </component>
    </div>
  </div>
</template>

<script>
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

export default {
  name: 'App',
  components: {
    Comp1,
    Comp2
  },
  data() {
    return {
      selectedComponent: 'Comp2'
    }
  }
}
</script>

<style scoped>
#app {
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  cursor: pointer;
}
</style>
