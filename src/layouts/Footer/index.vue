<script setup lang="ts">
import Avatar from "~/assets/avatar.jpg";

defineOptions({
  name: "LayoutFooter",
});
</script>

<template>
  <footer
    class="sticky bottom-0 border-t border-base-100 bg-base-200 px-0 pt-2 text-base-content opacity-90 footer footer-center"
  >
    <div class="max-w-6xl w-full flex flex-row items-center justify-between gap-6">
      <a
        href="https://github.com/GustavoAstMariano"
        target="_blank"
        rel="nofollow"
        class="inline-flex items-center justify-center hover:opacity-90"
      ><div class="mr-3 avatar">
         <div class="h-14 w-14 bg-neutral p-px mask mask-squircle">
           <img
             width="54"
             height="54"
             :src="Avatar"
             alt="Gustavo Ast"
             class="mask mask-squircle"
           >
         </div>
       </div>
        <div class="text-left">
          <p class="text-xs text-base-content text-opacity-50">Created by</p>
          <h2 class="text-lg text-base-content font-bold">Gustavo Ast</h2>
        </div>
      </a>
    </div>
  </footer>
</template>
