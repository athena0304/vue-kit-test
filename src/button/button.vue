<template>
  <div class="button" @click="onClick">
  按钮啊啊啊啊
  </div>
</template>
<script>
export default {
  name: 'Button',
  methods: {
    onClick() {
      console.log('button click1')
    }
  }
}
</script>
<style lang="scss">
.button {
  color: lightblue;
  font-size: 14px;
}

</style>