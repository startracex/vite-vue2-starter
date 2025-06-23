<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <button type="button" @click="incrementCount">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
