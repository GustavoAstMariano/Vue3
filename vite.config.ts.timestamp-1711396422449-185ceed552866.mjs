// vite.config.ts
import { resolve } from "node:path";
import { defineConfig } from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/vite@5.2.0_@types+node@20.11.30/node_modules/vite/dist/node/index.js";
import Vue from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.0_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@2.79.1_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Icons from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/unplugin-icons@0.18.5_@vue+compiler-sfc@3.4.21/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/unplugin-icons@0.18.5_@vue+compiler-sfc@3.4.21/node_modules/unplugin-icons/dist/resolver.js";
import Inspect from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/vite-plugin-inspect@0.8.3_rollup@2.79.1_vite@5.2.0/node_modules/vite-plugin-inspect/dist/index.mjs";
import { VitePWA } from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/vite-plugin-pwa@0.19.5_vite@5.2.0_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import VueDevTools from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/vite-plugin-vue-devtools@7.0.19_rollup@2.79.1_vite@5.2.0_vue@3.4.21/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import VueI18nPlugin from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/@intlify+unplugin-vue-i18n@3.0.1_rollup@2.79.1_vue-i18n@9.10.2/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import UnoCss from "file:///home/tinew/Documents/Projects/boot-vue/node_modules/.pnpm/unocss@0.58.6_postcss@8.4.37_rollup@2.79.1_vite@5.2.0/node_modules/unocss/dist/vite.mjs";
var __vite_injected_original_dirname = "/home/tinew/Documents/Projects/boot-vue";
var vite_config_default = defineConfig({
  server: {
    host: "localhost",
    port: 8888,
    open: true,
    proxy: {}
  },
  plugins: [
    Vue(
      {
        script: {
          propsDestructure: true,
          defineModel: true
        }
      }
    ),
    Icons({
      scale: 1.5,
      // Scale of icons against 1em
      defaultStyle: "",
      // Style apply to icons
      defaultClass: "inline-block h-5 w-5 stroke-current md:h-6 md:w-6",
      // Class names apply to icons
      compiler: "vue3",
      // "vue2", "vue3", "jsx"
      jsx: "react",
      // "react" or "preact"
      autoInstall: true
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core"
      ],
      dts: "types/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/store"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "types/components.d.ts",
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      resolvers: [
        IconsResolver()
      ]
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [resolve(__vite_injected_original_dirname, "src/locales/**")]
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "BootVue",
        short_name: "BootVue",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),
    // https://github.com/unocss/unocss
    // see unocss.config.ts for config
    UnoCss()
  ],
  resolve: {
    alias: {
      "~/": `${resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
      @import "~/styles/variables.scss";
    `,
        javascriptEnabled: true
      }
    }
  },
  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS90aW5ldy9Eb2N1bWVudHMvUHJvamVjdHMvYm9vdC12dWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3RpbmV3L0RvY3VtZW50cy9Qcm9qZWN0cy9ib290LXZ1ZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS90aW5ldy9Eb2N1bWVudHMvUHJvamVjdHMvYm9vdC12dWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBWdWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XG5pbXBvcnQgSWNvbnMgZnJvbSBcInVucGx1Z2luLWljb25zL3ZpdGVcIjtcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gXCJ1bnBsdWdpbi1pY29ucy9yZXNvbHZlclwiO1xuaW1wb3J0IEluc3BlY3QgZnJvbSBcInZpdGUtcGx1Z2luLWluc3BlY3RcIjtcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiO1xuXG4vLyB2aXRlLmNvbmZpZy50c1xuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSBcIkBpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGVcIjtcbmltcG9ydCBVbm9Dc3MgZnJvbSBcInVub2Nzcy92aXRlXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcImxvY2FsaG9zdFwiLFxuICAgIHBvcnQ6IDg4ODgsXG4gICAgb3BlbjogdHJ1ZSxcbiAgICBwcm94eToge30sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBWdWUoXG4gICAgICB7XG4gICAgICAgIHNjcmlwdDoge1xuICAgICAgICAgIHByb3BzRGVzdHJ1Y3R1cmU6IHRydWUsXG4gICAgICAgICAgZGVmaW5lTW9kZWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICksXG4gICAgSWNvbnMoe1xuICAgICAgc2NhbGU6IDEuNSwgLy8gU2NhbGUgb2YgaWNvbnMgYWdhaW5zdCAxZW1cbiAgICAgIGRlZmF1bHRTdHlsZTogXCJcIiwgLy8gU3R5bGUgYXBwbHkgdG8gaWNvbnNcbiAgICAgIGRlZmF1bHRDbGFzczogXCJpbmxpbmUtYmxvY2sgaC01IHctNSBzdHJva2UtY3VycmVudCBtZDpoLTYgbWQ6dy02XCIsIC8vIENsYXNzIG5hbWVzIGFwcGx5IHRvIGljb25zXG4gICAgICBjb21waWxlcjogXCJ2dWUzXCIsIC8vIFwidnVlMlwiLCBcInZ1ZTNcIiwgXCJqc3hcIlxuICAgICAganN4OiBcInJlYWN0XCIsIC8vIFwicmVhY3RcIiBvciBcInByZWFjdFwiXG4gICAgICBhdXRvSW5zdGFsbDogdHJ1ZSxcbiAgICB9KSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgXCJ2dWVcIixcbiAgICAgICAgXCJ2dWUtcm91dGVyXCIsXG4gICAgICAgIFwidnVlLWkxOG5cIixcbiAgICAgICAgXCJ2dWUvbWFjcm9zXCIsXG4gICAgICAgIFwiQHZ1ZXVzZS9oZWFkXCIsXG4gICAgICAgIFwiQHZ1ZXVzZS9jb3JlXCIsXG4gICAgICBdLFxuICAgICAgZHRzOiBcInR5cGVzL2F1dG8taW1wb3J0cy5kLnRzXCIsXG4gICAgICBkaXJzOiBbXG4gICAgICAgIFwic3JjL2NvbXBvc2FibGVzXCIsXG4gICAgICAgIFwic3JjL3N0b3JlXCIsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGV4dGVuc2lvbnM6IFtcInZ1ZVwiXSxcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSxcbiAgICAgIGR0czogXCJ0eXBlcy9jb21wb25lbnRzLmQudHNcIixcbiAgICAgIGV4Y2x1ZGU6IFsvW1xcXFwvXW5vZGVfbW9kdWxlc1tcXFxcL10vLCAvW1xcXFwvXVxcLmdpdFtcXFxcL10vLCAvW1xcXFwvXVxcLm51eHRbXFxcXC9dL10sXG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgSWNvbnNSZXNvbHZlcigpLFxuICAgICAgXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnRsaWZ5L2J1bmRsZS10b29scy90cmVlL21haW4vcGFja2FnZXMvdW5wbHVnaW4tdnVlLWkxOG5cbiAgICBWdWVJMThuUGx1Z2luKHtcbiAgICAgIHJ1bnRpbWVPbmx5OiB0cnVlLFxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxuICAgICAgZnVsbEluc3RhbGw6IHRydWUsXG4gICAgICBpbmNsdWRlOiBbcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2xvY2FsZXMvKipcIildLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbiAgICAgIGluY2x1ZGVBc3NldHM6IFtcImZhdmljb24uaWNvXCJdLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogXCJCb290VnVlXCIsXG4gICAgICAgIHNob3J0X25hbWU6IFwiQm9vdFZ1ZVwiLFxuICAgICAgICB0aGVtZV9jb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9wd2EtMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL3B3YS01MTJ4NTEyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvcHdhLTUxMng1MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgcHVycG9zZTogXCJhbnkgbWFza2FibGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1pbnNwZWN0XG4gICAgLy8gVmlzaXQgaHR0cDovL2xvY2FsaG9zdDozMzMzL19faW5zcGVjdC8gdG8gc2VlIHRoZSBpbnNwZWN0b3JcbiAgICBJbnNwZWN0KCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2ViZmFuc3Bsei92aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcbiAgICBWdWVEZXZUb29scygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Vub2Nzcy91bm9jc3NcbiAgICAvLyBzZWUgdW5vY3NzLmNvbmZpZy50cyBmb3IgY29uZmlnXG4gICAgVW5vQ3NzKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJ+L1wiOiBgJHtyZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIil9L2AsXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxuICAgICAgQGltcG9ydCBcIn4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG4gICAgYCxcbiAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlc3QtZGV2L3ZpdGVzdFxuICB0ZXN0OiB7XG4gICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UyxTQUFTLGVBQWU7QUFDL1QsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGFBQWE7QUFDcEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8saUJBQWlCO0FBR3hCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sWUFBWTtBQWJuQixJQUFNLG1DQUFtQztBQWdCekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTyxDQUFDO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFO0FBQUEsUUFDRSxRQUFRO0FBQUEsVUFDTixrQkFBa0I7QUFBQSxVQUNsQixhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUE7QUFBQSxNQUNQLGNBQWM7QUFBQTtBQUFBLE1BQ2QsY0FBYztBQUFBO0FBQUEsTUFDZCxVQUFVO0FBQUE7QUFBQSxNQUNWLEtBQUs7QUFBQTtBQUFBLE1BQ0wsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBO0FBQUEsSUFFRCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBO0FBQUEsSUFHRCxXQUFXO0FBQUEsTUFDVCxZQUFZLENBQUMsS0FBSztBQUFBLE1BQ2xCLFNBQVMsQ0FBQyxVQUFVLFlBQVk7QUFBQSxNQUNoQyxLQUFLO0FBQUEsTUFDTCxTQUFTLENBQUMsMEJBQTBCLG1CQUFtQixrQkFBa0I7QUFBQSxNQUN6RSxXQUFXO0FBQUEsUUFDVCxjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLElBR0QsY0FBYztBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsaUJBQWlCO0FBQUEsTUFDakIsYUFBYTtBQUFBLE1BQ2IsU0FBUyxDQUFDLFFBQVEsa0NBQVcsZ0JBQWdCLENBQUM7QUFBQSxJQUNoRCxDQUFDO0FBQUE7QUFBQSxJQUdELFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLGVBQWUsQ0FBQyxhQUFhO0FBQUEsTUFDN0IsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQTtBQUFBLElBSUQsUUFBUTtBQUFBO0FBQUEsSUFHUixZQUFZO0FBQUE7QUFBQTtBQUFBLElBSVosT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sR0FBRyxRQUFRLGtDQUFXLEtBQUssQ0FBQztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLFFBR2hCLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osYUFBYTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
