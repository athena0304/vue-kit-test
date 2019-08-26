<template>
  <div class="card" @click="onClick">
  cardaaaaaa
  </div>
</template>
<script>
export default {
  name: 'Card',
  methods: {
    onClick() {
      console.log('card click')
    }
  }
}
</script>
<style lang="scss" scope>
.card {
  color: pink;
}
</style>