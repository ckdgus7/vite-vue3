import { ref } from 'vue';
import { useStore } from "vuex";
export const useAddCart = ({ root: { $nextTick } }, actions, num=1) => {
  const showCartModal = ref(false);
  const store = useStore();
  const openCartModal = async () => {
    await store.dispatch('FETCH_CART');
    $nextTick(() => {
      setTimeout(() => {
        showCartModal.value = true;
      }, 500);
    });
  };
  const addCartItem = (list) => {
    const { it_id, it_name, it_price, it_img } = list;
    const it_num = (num === 1) ? num : num.value;
    store.dispatch('INSERT_CART', { it_id, it_name, it_img, it_price, it_num });
      .then(() => {
        if( confirm(`${it_name} 제품을 장바구니에 담았습니다.\n장바구니를 여시겠습니까?`) ) {
          openCartModal();
        }
      });
  };
  const closeCartModal = () => {
    showCartModal.value = false;
  };

  return {
    showCartModal,
    addCartItem,
    closeCartModal
  }
}