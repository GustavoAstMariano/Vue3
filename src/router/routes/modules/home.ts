const home = [{
  path: "/home",
  name: "Home",
  component: () => import("~/pages/home/index.vue"),
  meta: {
    title: "Home",
  },
}, {
  path: "/hero",
  name: "Hero",
  component: () => import("~/pages/home/components/Hero.vue"),
}, {
  path: "/StoreTest",
  name: "StoreTest",
  component: () => import("~/pages/home/components/StoreTest.vue"),
},{
  path: "/Swiper",
  name: "Swiper",
  component: () => import("~/pages/home/components/Swiper.vue"),
}
];

export default home;
