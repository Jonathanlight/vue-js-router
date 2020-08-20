<template>
  <transition mode="out-in" appear>
  <div class="card">
    <div class="card-header text-light" style="background: red;"> Component A </div>
    <div class="card-body m-5">
        <p class="card-text"> C'est un super composant </p>
        <router-view></router-view>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'Component3',
  created() {
    console.log('route: ', this.$route);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(-150px);
  }
  to {

  }
}

@keyframes fadeout {
  to {
    opacity: 0;
    transform: translateY(150px);
  }
}

.v-enter-active {
  animation: fadein 1s;
}

.v-leave-active {
  animation: fadeout 1s;
}
</style>
