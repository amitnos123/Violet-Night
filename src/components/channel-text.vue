<script setup lang="ts">
import { ref } from "vue";
import { ChannelObject } from "../types";

const { channelId = '', imgURL = '', channelName = '' } = defineProps<ChannelObject>()

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

  il {
    display: flex;
    flex: 1 1;
    flex-direction: row;

    padding-left: 10px;
  }

  img {
    height: var(--guild_img_size);
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