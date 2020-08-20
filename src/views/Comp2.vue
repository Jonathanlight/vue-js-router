<template>
  <transition mode="out-in" appear>
  <div class="card">
    <div class="card-header text-light" style="background: blue;"> Component 2 </div>
    <div class="card-body m-5">
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
        <p class="card-text text-danger"> C'est un super composant </p>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'Comp2',
  props: ['id'],
  created() {
    console.log('created');
  },
  beforeRouteEnter(to, from, next) {
    console.log({
      type: 'beforeRouteEnter : ',
      to, from
    })
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log({
      type: 'beforeRouteUpdate : ',
      to, from
    })
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log({
      type: 'beforeRouteLeave : ',
      to, from
    })
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    transform: translateX(250px);
  }
}

.v-enter-active {
  animation: fadein 1s;
}

.v-leave-active {
  animation: fadeout 1s;
}
</style>
