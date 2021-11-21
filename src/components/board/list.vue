<template>
  <div class="tbl_head01 tbl_wrap">
    <div style="float: right">
      검색 :
      <input
        type="text"
        @keyup="searchList"
        ref="searchtext"
        placeholder="검색어입력"
        style="height: 30px; width: 200px; margin-bottom: 10px"
      />
    </div>
    <table>
      <caption>
        자유게시판 목록
      </caption>
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
        </tr>
      </thead>
      <transition-group name="list" tag="tbody">
        <tr
          v-for="(listData, k) in GET_BOARD_LIST"
          :key="`${listData.id}_${k}`"
          class="list-item"
        >
          <td class="td_num2">{{ listData.id }}</td>
          <td class="td_subject" style="padding-left: 0px">
            <div class="bo_tit">
              <!-- <router-link
              :to="{
                path: `/board/${GET_BOARD_LIST.board_id}/view/${listData.wr_id}`,
                query: {
                  s: searchtext.value || ''
                }
              }">{{ listData.wr_title }}</router-link> -->
              <router-link
                :to="{
                  path: `/board/detail/${listData.id}`,
                }"
                >{{ listData.title }}</router-link
              >
            </div>
          </td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useListFilter } from "../../composition_func/common/listFilter.js";
export default {
  setup(props, ctx) {
    const store = useStore();
    const searchtext = ref(props.s);
    const GET_BOARD_LIST = computed(() => {
      return store.getters["GET_BOARD_LIST"];
    });
    const { searchList } = useListFilter(ctx);
    return {
      GET_BOARD_LIST,
      searchList,
      searchtext,
    };
  },
};
</script>
