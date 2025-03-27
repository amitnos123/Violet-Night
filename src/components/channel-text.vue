<script setup lang="ts">
import { ref } from "vue";
interface Props {
  channelId : string
  imgURL : string
  channelName : string
}

const { channelId = '', imgURL = '', channelName = '' } = defineProps<Props>()

const tooltipShow = ref(false)
</script>

<template>
  <il>
    <a :href="channelId">
      <div class="wrapper">
        <img :src="imgURL"/>
        <span class="channel-name">{{channelName}}</span>
      </div>
    </a>
  </il>
</template>

<style scoped>
  @import '../assets/css/tooltip.css';

  img {
    height: 50px;
    aspect-ratio: 1 / 1;
  }

  .wrapper {
    flex: 1 1;
    display: flex;
    flex-direction: row;
  }

  .channel-name {
    margin: 17px 0;
  }
</style>