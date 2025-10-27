<template>
  <PageContainer>
    <div class="flex flex-col gap-8 py-16">
      <img
        src="/images/brands/ricky-and-morty-logo.png"
        class="w-[220px] h-16"
      />
      <div class="flex gap-16">
        <img
          :src="data.image"
          class="w-[369px] h-[461px] object-cover rounded-2xl"
        />
        <div class="flex flex-col gap-12">
          <div class="flex gap-4 items-center">
            <h1 class="font-bold text-5xl">{{ data.name }}</h1>
          </div>

          <span class="flex gap-2 text-2xl items-center"
            ><IconsMonitorPlay />Participou de
            {{ data.episode.length }} episódios</span
          >

          <div class="flex text-2xl gap-6">
            <span class="flex items-center gap-1">
              <IconsPulse />
              {{ getStatus(data.status) }}
            </span>
            <span class="flex items-center gap-1">
              <IconsAlien />
              {{ getSpecies(data.species) }}
            </span>
            <span class="flex items-center gap-1">
              <IconsPlanet />
              {{ getGender(data.gender) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
  <div class="border-b-2 border-[#11B0C8]"></div>
  <PageContainer></PageContainer>
</template>

<script setup>
import PageContainer from '@/components/PageContainer/index.vue';

const route = useRoute();

const { id } = route.params;
const { data } = await useFetch(
  `https://rickandmortyapi.com/api/character/${id}`,
);

useHead({
  title: `${data.value.name} - Rick and Morty`,
  link: [{ rel: 'icon', type: 'image/x-icon', href: data.value.image }],
});
</script>
