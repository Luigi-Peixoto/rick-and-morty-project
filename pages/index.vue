<template>
  <div class="text-white flex flex-col gap-16">
    <CharacterListing />

    <EpisodesListing />
  </div>
</template>

<script lang="ts" setup>
import EpisodesListing from '@/components/EpisodesListing/index.vue';
import CharacterListing from '@/components/CharacterListing/index.vue';

useHead({
  title: `Rick and Morty API`,
});
</script>
