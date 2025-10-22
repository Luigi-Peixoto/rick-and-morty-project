<template>
  <section class="flex flex-col gap-8">
    <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
      <ListingHeader title="Personagens" />

      <div class="flex flex-wrap gap-4 justify-center">
        <Card v-for="currentCharacter of data.results.slice(0, 8)">
          <img
            :src="currentCharacter.image"
            width="262"
            class="rounded-2xl h-[200px] object-cover"
          />
          <div class="grid grid-cols-[1fr,48px]">
            <div class="flex flex-col gap-4">
              <p class="text-base font-bold">{{ currentCharacter.name }}</p>
              <div class="flex flex-col gap-2">
                <span class="flex items-center gap-1">
                  <IconsPulse />
                  {{ getStatus(currentCharacter.status) }}
                </span>
                <span class="flex items-center gap-1">
                  <IconsAlien />
                  {{ getSpecies(currentCharacter.species) }}
                </span>
                <span class="flex items-center gap-1">
                  <IconsPlanet />
                  {{ getOriginName(currentCharacter.origin.name) }}
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <KnowMore
            :action-url="`character/${currentCharacter.id}`"
            class="mt-auto"
          />
        </Card>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import KnowMore from '@/components/KnowMore/index.vue';
import Card from '@/components/Card/index.vue';
import ListingHeader from '@/components/ListingHeader/index.vue';

const { data } = await useFetch('https://rickandmortyapi.com/api/character');
console.log(data.value);
</script>
