<template>
  <div class="text-white flex flex-col gap-16">
    <HomeHeroHeader />
    <PageContainer class="flex flex-col gap-16">
      <CharacterListing />

      <EpisodesListing />
    </PageContainer>
  </div>
</template>

<script lang="ts" setup>
import PageContainer from '@/components/PageContainer/index.vue';
import HomeHeroHeader from '@/components/HomeHeroHeader/index.vue';
import EpisodesListing from '@/components/EpisodesListing/index.vue';
import CharacterListing from '@/components/CharacterListing/index.vue';

useHead({
  title: `Rick and Morty API`,
});
</script>
