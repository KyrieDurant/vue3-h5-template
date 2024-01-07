import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Demo from "@/views/demo/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Edit" },
    children: [
      // {
      //   path: "demo",
      //   name: "Demo",
      //   component: Demo,
      //   meta: {
      //     title: "主页"
      //   }
      // },
      {
        path: "edit",
        name: "Edit",
        component: () => import("@/views/edit/index.vue"),
        meta: {
          title: "编辑"
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工具"
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "关于",
          noCache: true
        }
      }
    ]
  }
];

export default routes;
