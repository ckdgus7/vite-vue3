<template>
  <section id="bo_w">
    <form
      name="fwrite"
      id="fwrite"
      @submit.prevent="insertBoardData"
      method="post"
      enctype="multipart/form-data"
      style="width: 100%"
    >
      <div class="bo_w_info write_div">
        <label for="wr_name" class="sound_only"
          >이름<strong>필수</strong></label
        >
        <input
          type="text"
          name="wr_name"
          ref="focusinput"
          id="wr_name"
          v-model.trim="inputState.wr_name"
          required
          class="frm_input half_input"
          placeholder="이름"
        />
      </div>
      <div class="bo_w_tit write_div">
        <label for="wr_subject" class="sound_only"
          >제목<strong>필수</strong></label
        >
        <div id="autosave_wrapper" class="write_div">
          <input
            type="text"
            name="wr_subject"
            v-model.trim="inputState.wr_subject"
            id="wr_subject"
            required
            class="frm_input full_input"
            size="50"
          />
        </div>
      </div>
      <div class="write_div">
        <label for="wr_content" class="sound_only"
          >내용<strong>필수</strong></label
        >
        <div class="wr_content">
          <span class="sound_only">웹에디터 시작</span>
          <textarea
            id="wr_content"
            name="wr_content"
            v-model="inputState.wr_content"
            class=""
            maxlength="65536"
            style="width: 100%; height: 300px"
          ></textarea>
          <span class="sound_only">웹 에디터 끝</span>
        </div>
      </div>
      <div class="btn_confirm write_div">
        <a href="" @click.prevent="insertCancel" class="btn_cancel btn">취소</a>
        <button
          type="submit"
          id="btn_submit"
          accesskey="s"
          class="btn_submit btn"
        >
          작성완료
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useInputFocus } from '../../composition_func/board/firstInputFocus.js';
export default {
  setup(props, ctx) {
    const store = useStore();
    const boardListLink = () => useRouter().push('/board');
    const inputState = reactive({
      wr_name: '',
      wr_subject: '',
      wr_content: '',
    });
    const insertBoardData = async () => {
      const { wr_name, wr_subject, wr_content } = inputState;
      await store.dispatch('INSERT_BOARD', {
        bid: 'bbs',
        wr_name,
        wr_subject,
        wr_content,
      });
      boardListLink();
    };
    const insertCancel = () => {
      boardListLink();
    };
    const focusinput = useInputFocus();
    return {
      focusinput,
      inputState,
      GET_BOARD_LIST,
      insertBoardData,
      insertCancel,
    };
  },
};
</script>
