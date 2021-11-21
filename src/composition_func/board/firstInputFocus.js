import { ref, onMounted } from 'vue';
export const useInputFocus = () => {
  const focusinput = ref('');
  onMounted(() => {
    focusinput.value.focus();
  });
  return focusinput;
};
