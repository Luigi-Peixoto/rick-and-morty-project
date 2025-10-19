<template>
  <section class="flex flex-col gap-8">
    <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
      <ListingHeader title="Personagens" />

      <div class="flex flex-wrap gap-4 justify-center">
        <Card v-for="currentCharacter of data.results">
          <img
            :src="currentCharacter.image"
            width="262"
            class="rounded-2xl h-[200px] object-cover"
          />
          <div class="grid grid-cols-[1fr,48px]">
            <div class="flex flex-col gap-4">
              <p class="text-base font-bold">{{ currentCharacter.name }}</p>
              <div class="flex flex-col gap-2">
                <p>
                  {{ currentCharacter.status === 'Alive' ? 'Vivo' : 'Morto' }}
                </p>
                <p>{{ currentCharacter.species }}</p>
                <p>{{ currentCharacter.origin.name }}</p>
              </div>
            </div>
            <div>
              <IconsHeartFilled v-if="currentCharacter.status === 'Alive'" />
              <IconsHeartOutlined v-else />
            </div>
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
<script setup>
import KnowMore from '@/components/KnowMore/index.vue';
import Card from '@/components/Card/index.vue';
import ListingHeader from '@/components/ListingHeader/index.vue';

const { data } = await useFetch('https://rickandmortyapi.com/api/character');
</script>
