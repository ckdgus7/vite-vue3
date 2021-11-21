<template>
  <div id="nav">
    <span class="logo"> 최창현 Playground </span>
    <span class="menu">
      <span v-for="(menu, k) in gnbMenu.LOGIN_AFTER" :key="`${menu.mkey}_${k}`">
        <router-link
          class="nav-link"
          :to="{
            path: menu.linkUrl,
          }"
        >
          {{ menu.label }}
        </router-link>
        {{ isLastIndex(gnbMenu.LOGIN_AFTER, k) ? "" : "|" }}
      </span>
      <span style="margin-left: 30px">
        <a :href="gitLink" target="_blank" style="color: red">GitHub</a>
      </span>
    </span>
  </div>
</template>
<script>
// import { reactive, computed, onUpdated } from 'vue';
import { reactive } from "vue";
import gnb from "@/data/menu/gnb.js";
import { checkLoopLastIndex } from "@/utils/checkLoopLastIndex.js";
export default {
  setup() {
    // const { getters, actions } = injectStore();
    const state = reactive({
      gnbMenu: gnb,
      gitLink: import.meta.env.VUE_APP_GITHUB_URL,
    });
    // const GET_IS_LOGIN = computed(() => {
    //   return getters.GET_IS_LOGIN;
    // });
    // const GET_USER_NAME = computed(() => {
    //   return getters.GET_USER_NAME;
    // });
    // const procLogout = async () => {
    //   await actions.LOGOUT[0](GET_USER_NAME);
    //   $router.replace('/login');
    // };
    // onUpdated(() => {});
    const isLastIndex = (loop, key) => {
      return checkLoopLastIndex(loop, key);
    };
    return {
      // GET_IS_LOGIN,
      // GET_USER_NAME,
      // procLogout,
      gnbMenu: state.gnbMenu,
      gitLink: state.gitLink,
      isLastIndex,
    };
  },
};
</script>
<style scoped>
#nav {
  margin: 20px;
}
#nav a {
  font-weight: bold;
}
#nav .menu {
  margin-left: 30px;
}
#nav .logo {
  padding: 5px;
  width: 140px;
  height: 40px;
  text-align: center;
  background: green;
  color: white;
  font-size: 20px;
}
#nav a.router-link-exact-active,
a.router-link-active {
  color: red;
}
#nav a.ckdgus-restapi-nav-link-exact-active,
a.ckdgus-restapi-nav-link-active {
  color: red;
}
#nav a.nav-link.viewed {
  color: #42b983;
}
</style>
