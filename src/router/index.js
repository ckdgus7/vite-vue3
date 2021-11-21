import { createRouter, createWebHistory } from "vue-router";

// boardview: () =>
// import(/* webpackChunkName: "boardview" */ '@/views/BBSView.vue'),
const routePages = {
  login: () => import("@/views/LoginForm.vue"),
  signup: () => import("@/views/SignupForm.vue"),
  hello: () => import("@/views/HelloWorld.vue"),
  home: () => import("@/views/Home.vue"),
  board: () => import("@/views/Board.vue"),
  bbs: () => import("@/views/BBS.vue"),
  boardview: () => import("@/views/BBSView.vue"),
  boardwrite: () => import("@/views/BBSWrite.vue"),
  boardupdate: () => import("@/views/BBSUpdate.vue"),
  memo: () => import("@/views/Home.vue"),
  shopping: () => import("@/views/Home.vue"),
  shoppingview: () => import("@/views/Home.vue"),
  interestitem: () => import("@/views/Home.vue"),
  notFoundPage: () => import("@/views/NotFoundPage.vue"),
};
const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: routePages.home,
    },
    {
      path: "/hello",
      name: "hello",
      component: routePages.hello,
    },
    {
      path: "/home",
      name: "home",
      meta: {
        requiresAuth: true,
      },
      component: routePages.home,
    },
    {
      path: "/board",
      name: "board",
      meta: {
        requiresAuth: true,
      },
      component: routePages.board,
      children: [
        {
          path: "",
          name: "bbs",
          props: (route) => {
            return route.query.s || "";
          },
          meta: {
            requiresAuth: true,
          },
          component: routePages.bbs,
        },
        {
          path: "detail/:id",
          name: "boardview",
          props: true,
          meta: {
            requiresAuth: true,
          },
          component: routePages.boardview,
        },
        {
          path: "write",
          name: "boardwrite",
          props: true,
          meta: {
            requiresAuth: true,
          },
          component: routePages.boardwrite,
        },
        {
          path: "modify/:id",
          name: "boardmodify",
          props: true,
          meta: {
            requiresAuth: true,
          },
          component: routePages.boardupdate,
        },
      ],
    },
    {
      path: "/memo",
      name: "memo",
      meta: {
        requiresAuth: true,
      },
      component: routePages.home,
    },
    {
      path: "/shopping",
      name: "shopping",
      props: true,
      meta: {
        requiresAuth: true,
      },
      component: routePages.home,
    },
    {
      path: "/interest-item",
      name: "interestitem",
      meta: {
        requiresAuth: true,
      },
      component: routePages.home,
    },
    {
      path: "/:catchAll(.*)",
      name: "notFoundPage",
      component: routePages.NotFoundPage,
    },
  ],
});

export default router;
