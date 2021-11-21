<template>
  <div class="board">
    <div id="wrapper">
      <div id="container_wr">
        <div id="container">
          <BoardTitle
            ><template #board_title
              >[ {{ GET_BOARD_LIST.board_title }} ]</template
            ></BoardTitle
          >
          <div id="bo_list" style="width: 100%">
            <BoardTop />
            <BoardList />
            <BoardBottom />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import BoardTitle from "../components/board/title.vue";
import BoardTop from "../components/board/top.vue";
import BoardList from "../components/board/list.vue";
import BoardBottom from "../components/board/bottom.vue";

export default {
  components: {
    BoardTitle,
    BoardTop,
    BoardList,
    BoardBottom,
  },
  setup() {
    const store = useStore();
    const GET_BOARD_LIST = computed(() => {
      return store.getters["GET_BOARD_LIST"];
    });
    store.dispatch("FETCH_BOARD", { bid: 1 });
    return {
      GET_BOARD_LIST,
    };
  },
};
</script>
