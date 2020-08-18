<template>
  <div class="card">
    <div class="card-header text-light" style="background: skyblue;"> Component 2 </div>
    <div class="card-body m-5">
        <p class="card-text"> C'est un super composant </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comp2',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
