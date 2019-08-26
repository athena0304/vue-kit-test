<template>
  <div @click="onClick">
  按钮啊啊啊啊
  </div>
</template>
<script>
export default {
  name: 'Button',
  methods: {
    onClick() {
      console.log('button click')
    }
  }
}
</script>