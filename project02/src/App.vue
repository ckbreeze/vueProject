<template>
  <div class="example">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Webpack',
    };
  },
};
</script>
<style>
.example {
  color: red;
}
</style>