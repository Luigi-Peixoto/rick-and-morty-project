<template>
  <section class="flex flex-col w-full max-w-[1224px] mx-auto gap-8">
    <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
      <ListingHeader title="Episódios" />

      <div
        class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <Card
          v-for="currentEpisode of data.results.slice(0, 5)"
          class="flex flex-col gap-2 justify-between min-h-[150px]"
        >
          <div class="flex gap-2 item-center">
            <IconsMonitorPlay class="flex-[0_0_24px]" />
            <p>{{ currentEpisode.name }} | {{ currentEpisode.episode }}</p>
          </div>

          <div class="flex items-center justify-between">
            <KnowMore
              action-url="episode/{{currentEpisode.id}}"
              class="my-auto"
            />
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from '@/components/Card/index.vue';
import KnowMore from '@/components/KnowMore/index.vue';
import ListingHeader from '@/components/ListingHeader/index.vue';

const { data } = await useFetch('https://rickandmortyapi.com/api/episode');
</script>
