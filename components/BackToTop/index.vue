<template>
  <button class="flex gap-2 items-center" :onclick="scrollToTop">
    <p>Voltar ao topo</p>
    <IconsArrowCircleUp />
  </button>
</template>

<script setup lang="ts">
const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>
