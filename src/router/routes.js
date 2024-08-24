import { createRouter, createWebHistory } from "vue-router";

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `,
};

const routes = [
  {
    path: "/",
    redirect: {
      name: "dashboard-page",
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "dashboard-page",
        name: "dashboard-page",
        component: () => import("pages/FrontendExercise/DashboardPage.vue"),
      },
      {
        path: "table-page",
        name: "table-page",
        component: () => import("pages/FrontendExercise/TablePage.vue"),
      },
      {
        path: "form-page",
        name: "form-page",
        component: () => import("pages/FrontendExercise/FormPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
