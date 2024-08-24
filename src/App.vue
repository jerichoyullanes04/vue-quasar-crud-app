<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: 600ms ease all;
}

.fade-enter-active-from,
.fade-leave-active-to {
  opacity: 0;
}
</style>
