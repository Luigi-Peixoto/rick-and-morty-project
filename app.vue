<template>
  <main class="bg-[#1E1E1E]">
    <div class="text-white flex flex-col gap-16 max-w-[1224px] w-full mx-auto">
      <CharacterListing />

      <EpisodesListing />
    </div>
  </main>
</template>

<script lang="ts" setup>
import EpisodesListing from '@/components/EpisodesListing/index.vue';
import CharacterListing from '@/components/CharacterListing/index.vue';
</script>
