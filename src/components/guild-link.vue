<script setup lang="ts">
import { ref } from "vue";
interface Props {
  guildId : string
  imgURL : string
  guildName : string
}

const { guildId = '', imgURL = '', guildName = '' } = defineProps<Props>()

const tooltipShow = ref(false)
</script>

<template>
  <il>
    <a :href="guildId">
      <div @mouseenter="tooltipShow = true" @mouseleave="tooltipShow = false">
        <img class="tooltip" :src="imgURL"/>
        <span v-if="tooltipShow" class="tooltiptext">{{guildName}}</span>
      </div>
    </a>
  </il>
</template>

<style scoped>
@import '../assets/css/tooltip.css';

  img {
    height: 50px;
    aspect-ratio: 1 / 1;
  };
</style>