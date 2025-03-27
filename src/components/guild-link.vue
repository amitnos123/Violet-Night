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

<style>
  img {
    height: 50px;
    aspect-ratio: 1 / 1;
  }
  .tooltiptext {
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    margin-top: 15px;
    background-color: black;
  }
</style>