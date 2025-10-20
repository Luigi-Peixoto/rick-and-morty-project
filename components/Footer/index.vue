<template>
  <footer>
    <PageContainer class="flex flex-col">
      <div class="flex justify-between items-center py-20">
        <img
          src="/images/brands/ricky-and-morty-logo.png"
          class="w-[165px] h-12"
        />
        <BackToTop />
      </div>

      <div class="border-t-2 flex justify-between py-6">
        <p>&copy;{{ new Date().getFullYear() }}</p>
        <div class="flex gap-1">
          <IconsCode />
          <p>
            Desenvolvido por
            <span class="text-[#11B0C8] font-bold">Luigi Peixoto</span>
          </p>
        </div>
      </div>
    </PageContainer>
  </footer>
</template>

<script setup>
import BackToTop from '@/components/BackToTop/index.vue';
</script>
