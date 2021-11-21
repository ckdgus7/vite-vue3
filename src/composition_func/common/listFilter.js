import { ref, watch } from 'vue';
import { useStore } from 'vuex';
export const useListFilter = ({ refs }) => {
  const searchtext = ref('');
  const searchList = () => {
    searchtext.value = refs.searchtext.value;
  };
  watch(
    () => searchtext.value,
    (kword) => {
      setTimeout(() => {
        useStore().dispatch('FETCH_BOARD', { bid: 1, kword: kword });
      }, 200);
    }
  );
  return {
    searchList,
  };
};
