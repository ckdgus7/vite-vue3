<template>
  <h1>{{ msg }}</h1>
  <p>count is: {{ testCount }}</p>
  <p>double count is: {{ testDoubleCount }}</p>
  <button @click="mutation_increment">mutation_increment</button>
  <button @click="mutation_decrement">mutation_decrement</button>
  <br />
  <br />
  <button @click="action_increment">action_increment</button>
  <button @click="action_decrement">action_decrement</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    const testCount = computed(() => store.state['test'].count);
    const testDoubleCount = computed(() => {
      return store.getters['test/GET_DOUBLE_TEST'];
    });
    const mutation_increment = () => store.commit('test/SET_INCREMENT_TEST');
    const mutation_decrement = () => store.commit('test/SET_DECREMENT_TEST');
    const action_increment = () => store.dispatch('test/SET_INCREMENT_TEST');
    const action_decrement = () => store.dispatch('test/SET_DECREMENT_TEST');

    return {
      testCount,
      testDoubleCount,
      mutation_increment,
      mutation_decrement,
      action_increment,
      action_decrement,
    };
  },
};
</script>
