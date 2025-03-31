<script setup lang="ts">
import { ref } from "vue";
import { GuildObject } from "../../types";

const { guildId = '', imgURL = '', guildName = '', newMessage = false } = defineProps<GuildObject>()

const tooltipShow = ref(false)
</script>

<template>
  <il>
    <div class="guildNewMessage inside-surface" :class="[newMessage ? 'guildNewMessageIcon' : '',]">
    </div>
    <a :href="guildId">
      <div @mouseenter="tooltipShow = true" @mouseleave="tooltipShow = false">
        <img class="tooltip" :src="imgURL"/>
        <span v-if="tooltipShow" class="tooltiptext">{{guildName}}</span>
      </div>
    </a>
  </il>
</template>

<style scoped>
@import '../../assets/css/tooltip.css';

  il {
    display: flex;
    flex: 1 1;
    flex-direction: row;
  }

  img {
    height: var(--guild_img_size);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    padding-left: 10%;
  }

  .guildNewMessage {
    width: 11%;
  }

  .guildNewMessageIcon {
    background-color: rgb(var(--primary-color));

    --border_raduis_guild_new_message_icon: 1000000000%;
    border-top-right-radius: var(--border_raduis_guild_new_message_icon);
    border-bottom-right-radius: var(--border_raduis_guild_new_message_icon);
  }
</style>