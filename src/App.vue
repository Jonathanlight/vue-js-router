<template>
  <div id="app" class="container-fluid d-flex flex flex-column">
    <div class="d-flex flex-row align-items-center bg-light mb-5" style="height: 50px;position: fixed;z-index: 1;width: 100%;top: 0; left: 0;">
      <router-link to="/" class="px-5">Component 1</router-link>
      <router-link to="/user/2" class="px-5">Component 2</router-link>
      <router-link to="/a" class="px-5">Component a</router-link>
      <router-link to="/pageb" class="px-5">Component B</router-link>

      <!-- <button class="btn btn-primary px-5" @click="goto()"> Component button </button> -->

      <!-- <button class="btn btn-primary mr-2 ml-2 px-5" @click="back()"> Back </button>
      <button class="btn btn-primary px-5" @click="forward()"> Forward </button> -->
    </div>
    <div class="m-5 d-flex flex-row">
      <transition :name="transitionName" mode="out-in" appear>
        <router-view class="w-50"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
   name: 'App',
   watch: {
     $route(to, from) {
       //this.transitionName = to;
       console.log(to.name,from)
     }
   },
   data() {
     return {
       id: 2,
       transitionName: 'v'
     }
   },
   methods: {
     back(){
       this.$router.go(-1);
     },
     forward(){
       this.$router.go(1);
     },
     /*goto() {
       this.$router.push({
         //path: '/user/' + this.id,
        name: 'user',
        params: {
          id: this.id
        },
        query: {
          name: 'john'
        }
      });
    }*/
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

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateX(-150px);
  }
  to {

  }
}

@keyframes fadeout {
  to {
    opacity: 0;
    transform: translateX(150px);
  }
}

.v-enter-active {
  animation: fadein 1s;
}

.v-leave-active {
  animation: fadeout 1s;
}
</style>
