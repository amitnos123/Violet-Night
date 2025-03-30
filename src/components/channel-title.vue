<script setup lang="ts">
import { ChannelObject } from "../types";

const { channelId = '', imgURL = '', channelName = '', newMessage = false } = defineProps<ChannelObject>()
</script>

<template>
    <div class="wrapper">
        <img :src="imgURL"/>
        <div>
            {{ channelId }}
            {{ channelName }}
            {{ newMessage }}
        </div>
    </div>
</template>

<style scoped>
    img {
        height: var(--guild_img_size);
        aspect-ratio: 1 / 1;
    }

    .wrapper {
        flex: 1 1;
        display: flex;
        flex-direction: row;
        
        align-items: center;

        column-gap: 10px;
    }
</style>